/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}

/**
 * 获取style样式
 */
export const getStyle = (element, attr, NumberMode = 'int') => {
    let target;
    // scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
    if (attr === 'scrollTop') {
        target = element.scrollTop;
    } else if (element.currentStyle) {
        target = element.currentStyle[attr];
    } else {
        target = document.defaultView.getComputedStyle(element, null)[attr];
    }
    //在获取 opactiy 时需要获取小数 parseFloat
    return NumberMode == 'float' ? parseFloat(target) : parseInt(target);
}

/**
 * 页面到达底部，加载更多
 */
export const loadMore = (element, callback) => {
    let windowHeight = window.screen.height;
    let height;
    let setTop;
    let paddingBottom;
    let marginBottom;
    let requestFram;
    let oldScrollTop;

    document.body.addEventListener('scroll', () => {
        loadMore();
    }, false)
    //运动开始时获取元素 高度 和 offseTop, pading, margin
    element.addEventListener('touchstart', () => {
        height = element.offsetHeight;
        setTop = element.offsetTop;
        paddingBottom = getStyle(element, 'paddingBottom');
        marginBottom = getStyle(element, 'marginBottom');
    }, {
            passive: true
        })

    //运动过程中保持监听 scrollTop 的值判断是否到达底部
    element.addEventListener('touchmove', () => {
        loadMore();
    }, {
            passive: true
        })

    //运动结束时判断是否有惯性运动，惯性运动结束判断是非到达底部
    element.addEventListener('touchend', () => {
        oldScrollTop = document.body.scrollTop;
        moveEnd();
    }, {
            passive: true
        })

    const moveEnd = () => {
        requestFram = requestAnimationFrame(() => {
            if (document.body.scrollTop != oldScrollTop) {
                oldScrollTop = document.body.scrollTop;
                loadMore();
                moveEnd();
            } else {
                cancelAnimationFrame(requestFram);
                //为了防止鼠标抬起时已经渲染好数据从而导致重获取数据，应该重新获取dom高度
                height = element.offsetHeight;
                loadMore();
            }
        })
    }

    const loadMore = () => {
        if (document.body.scrollTop + windowHeight >= height + setTop + paddingBottom + marginBottom) {
            callback();
        }
    }
}

/**
 * 显示返回顶部按钮，开始、结束、运动 三个过程中调用函数判断是否达到目标点
 */
export const showBack = callback => {
    let requestFram;
    let oldScrollTop;

    document.addEventListener('scroll', () => {
        showBackFun();
    }, false)
    document.addEventListener('touchstart', () => {
        showBackFun();
    }, {
            passive: true
        })

    document.addEventListener('touchmove', () => {
        showBackFun();
    }, {
            passive: true
        })

    document.addEventListener('touchend', () => {
        oldScrollTop = document.body.scrollTop;
        moveEnd();
    }, {
            passive: true
        })

    const moveEnd = () => {
        requestFram = requestAnimationFrame(() => {
            if (document.body.scrollTop != oldScrollTop) {
                oldScrollTop = document.body.scrollTop;
                moveEnd();
            } else {
                cancelAnimationFrame(requestFram);
            }
            showBackFun();
        })
    }

    //判断是否达到目标点
    const showBackFun = () => {
        if (document.body.scrollTop > 500) {
            callback(true);
        } else {
            callback(false);
        }
    }
}


/**
 * 运动效果
 * @param {HTMLElement} element   运动对象，必选
 * @param {JSON}        target    属性：目标值，必选
 * @param {number}      duration  运动时间，可选
 * @param {string}      mode      运动模式，可选
 * @param {function}    callback  可选，回调函数，链式动画
 */
export const animate = (element, target, duration = 400, mode = 'ease-out', callback) => {
    clearInterval(element.timer);

    //判断不同参数的情况
    if (duration instanceof Function) {
        callback = duration;
        duration = 400;
    } else if (duration instanceof String) {
        mode = duration;
        duration = 400;
    }

    //判断不同参数的情况
    if (mode instanceof Function) {
        callback = mode;
        mode = 'ease-out';
    }

    //获取dom样式
    const attrStyle = attr => {
        if (attr === "opacity") {
            return Math.round(getStyle(element, attr, 'float') * 100);
        } else {
            return getStyle(element, attr);
        }
    }
    //根字体大小，需要从此将 rem 改成 px 进行运算
    const rootSize = parseFloat(document.documentElement.style.fontSize);

    const unit = {};
    const initState = {};

    //获取目标属性单位和初始样式值
    Object.keys(target).forEach(attr => {
        if (/[^\d^\.]+/gi.test(target[attr])) {
            unit[attr] = target[attr].match(/[^\d^\.]+/gi)[0] || 'px';
        } else {
            unit[attr] = 'px';
        }
        initState[attr] = attrStyle(attr);
    });

    //去掉传入的后缀单位
    Object.keys(target).forEach(attr => {
        if (unit[attr] == 'rem') {
            target[attr] = Math.ceil(parseInt(target[attr]) * rootSize);
        } else {
            target[attr] = parseInt(target[attr]);
        }
    });


    let flag = true; //假设所有运动到达终点
    const remberSpeed = {}; //记录上一个速度值,在ease-in模式下需要用到
    element.timer = setInterval(() => {
        Object.keys(target).forEach(attr => {
            let iSpeed = 0; //步长
            let status = false; //是否仍需运动
            let iCurrent = attrStyle(attr) || 0; //当前元素属性址
            let speedBase = 0; //目标点需要减去的基础值，三种运动状态的值都不同
            let intervalTime; //将目标值分为多少步执行，数值越大，步长越小，运动时间越长
            switch (mode) {
                case 'ease-out':
                    speedBase = iCurrent;
                    intervalTime = duration * 5 / 400;
                    break;
                case 'linear':
                    speedBase = initState[attr];
                    intervalTime = duration * 20 / 400;
                    break;
                case 'ease-in':
                    let oldspeed = remberSpeed[attr] || 0;
                    iSpeed = oldspeed + (target[attr] - initState[attr]) / duration;
                    remberSpeed[attr] = iSpeed
                    break;
                default:
                    speedBase = iCurrent;
                    intervalTime = duration * 5 / 400;
            }
            if (mode !== 'ease-in') {
                iSpeed = (target[attr] - speedBase) / intervalTime;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            }
            //判断是否达步长之内的误差距离，如果到达说明到达目标点
            switch (mode) {
                case 'ease-out':
                    status = iCurrent != target[attr];
                    break;
                case 'linear':
                    status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed);
                    break;
                case 'ease-in':
                    status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed);
                    break;
                default:
                    status = iCurrent != target[attr];
            }

            if (status) {
                flag = false;
                //opacity 和 scrollTop 需要特殊处理
                if (attr === "opacity") {
                    element.style.filter = "alpha(opacity:" + (iCurrent + iSpeed) + ")";
                    element.style.opacity = (iCurrent + iSpeed) / 100;
                } else if (attr === 'scrollTop') {
                    element.scrollTop = iCurrent + iSpeed;
                } else {
                    element.style[attr] = iCurrent + iSpeed + 'px';
                }
            } else {
                flag = true;
            }

            if (flag) {
                clearInterval(element.timer);
                if (callback) {
                    callback();
                }
            }
        })
    }, 20);
}

// 得到按钮权限
export const getBtn = (dataArry) => {
    var tempArry = [];
    for (let i = 0; i < dataArry.length; i++) {
        if (dataArry[i].resOperType == 3) {
            tempArry.push(dataArry[i].resCode)
        }
    }
    return tempArry;
}

// 得到菜单
export const getMenu = (dataArry) => {
    var tempArry = [];
    for (let i = 0; i < dataArry.length; i++) {
        if (dataArry[i].resOperType != 3) {
            tempArry.push(dataArry[i])
        }
    }
    return tempArry;
}


// 处理返回的菜单成树结构
export const renderMenu = (dataArry) => {
    return data2tree(dataArry)
}

function data2tree(datas) {
    var dataArray = [];
    datas.forEach(function (data) {
        let pid = data.resPcode;
        if (!pid) {
            let objTemp = {
                title: data.resName,
                code: data.resCode,
                icon: data.icon,
                path: data.resUrl
            }
            dataArray.push(objTemp);
        }
    })
    return data2treeDG(datas, dataArray);
}

function data2treeDG(datas, dataArray) {
    for (var j = 0; j < dataArray.length; j++) {
        let dataArrayIndex = dataArray[j];
        let childrenArray = [];
        let code = dataArrayIndex.code;
        for (let i = 0; i < datas.length; i++) {
            let data = datas[i];
            let pid = data.resPcode;
            if (pid == code) { //判断是否为儿子节点
                let objTemp = {
                    title: data.resName,
                    code: data.resCode,
                    path: data.resUrl
                }
                childrenArray.push(objTemp);
            }

        }
        childrenArray.length > 0 ? dataArrayIndex.children = childrenArray : null
        if (childrenArray.length > 0) { //有儿子节点则递归
            data2treeDG(datas, childrenArray);
        }

    }
    return dataArray;
}
// 处理资源树
export const renderResouce = dataArry => {
    return resouceDataTree(dataArry)
}

function resouceDataTree(datas) {
    var dataArray = [];
    datas.forEach(function (data) {
        let pid = data.resPcode;
        if (!pid) {
            let objTemp = {
                label: data.resName,
                id: data.resCode,
                resUrl: data.resUrl
            };
            dataArray.push(objTemp);
        }
    });
    return resouceDataTreeDG(datas, dataArray);
}

function resouceDataTreeDG(datas, dataArray) {
    let isChildCode = []
    for (var j = 0; j < dataArray.length; j++) {
        let dataArrayIndex = dataArray[j];
        let childrenArray = [];
        let code = dataArrayIndex.id;
        for (let i = datas.length - 1; i >= 0; i--) {
            let data = datas[i];
            let pid = data.resPcode;
            if (pid == code) {
                //判断是否为儿子节点
                let objTemp = {
                    label: data.resName,
                    id: data.resCode,
                    resUrl: data.resUrl
                };
                childrenArray.push(objTemp);
                isChildCode.push(data.resCode);
            }
        }
        childrenArray.length > 0 ? (dataArrayIndex.children = childrenArray) : null;
        if (childrenArray.length > 0) {
            //有儿子节点则递归
            resouceDataTreeDG(datas, childrenArray);
        }
    }
    return dataArray.filter(item => !isChildCode.includes(item.code));
}

// 处理角色树
export const renderRoleTree = (dataArry) => {
    return dataRoletree(dataArry)
}

function dataRoletree(datas) {
    var dataArray = [];
    datas.forEach(function (data) {
        let pid = data.resPcode;
        if (!pid) {
            let objTemp = {
                title: data.resName,
                id: data.resCode,
            }
            dataArray.push(objTemp);
        }
    })
    return dataRoletreeDG(datas, dataArray);
}

function dataRoletreeDG(datas, dataArray) {
    for (var j = 0; j < dataArray.length; j++) {
        let dataArrayIndex = dataArray[j];
        let childrenArray = [];
        let code = dataArrayIndex.id;
        for (let i = 0; i < datas.length; i++) {
            let data = datas[i];
            let pid = data.resPcode;
            if (pid == code) { //判断是否为儿子节点
                let objTemp = {
                    title: data.resName,
                    id: data.resCode,
                }
                childrenArray.push(objTemp);
            }

        }
        childrenArray.length > 0 ? dataArrayIndex.children = childrenArray : null
        if (childrenArray.length > 0) { //有儿子节点则递归
            dataRoletreeDG(datas, childrenArray);
        }

    }
    return dataArray;
}
// 处理权限tree
export const renderAuthority = dataArry => {
    return authorityTree(dataArry)
}

function authorityTree(datas) {
    var dataArray = [];
    datas.forEach(function (data) {
        let pid = data.resPcode;
        if (!pid) {
            let objTemp = {
                resName: data.resName, // 资源名称
                resCode: data.resCode, // 资源id
                // modifyUser: data.modifyUser,
                resUrl: data.resUrl,
                // modifyTime: data.modifyTime,
                // resOperType: data.resOperType,
                resOperTypeId: data.resOperTypeId,
                // createTime: data.createTime,
                // resType: data.resType,
                icon: data.icon,
                resTypeId: data.resTypeId,
                orders: data.orders,
                // createUser: data.createUser,
                resPcode: data.resPcode,
                fatherName: data.fatherName

            };
            dataArray.push(objTemp);
        }
    });
    return authorityTreeDG(datas, dataArray);
}

function authorityTreeDG(datas, dataArray) {
    // debugger;
    let isChildCode = []
    for (var j = 0; j < dataArray.length; j++) {
        let dataArrayIndex = dataArray[j];
        let childrenArray = [];
        let code = dataArrayIndex.resCode;
        // for (let i = datas.length - 1; i >= 0; i--) {
        for (let i = 0; i < datas.length; i++) {
            let data = datas[i];
            let pid = data.resPcode;
            if (pid == code) {
                //判断是否为儿子节点
                let objTemp = {
                    resName: data.resName, // 资源名称
                    resCode: data.resCode, // 资源id
                    // modifyUser: data.modifyUser,
                    resUrl: data.resUrl,
                    // modifyTime: data.modifyTime,
                    // resOperType: data.resOperType,
                    resOperTypeId: data.resOperTypeId,
                    // createTime: data.createTime,
                    // resType: data.resType,
                    resTypeId: data.resTypeId,
                    orders: data.orders,
                    icon: data.icon,
                    // createUser: data.createUser,
                    resPcode: data.resPcode,
                    fatherName: data.fatherName
                };
                childrenArray.push(objTemp);
                isChildCode.push(data.resCode);
            }
        }
        childrenArray.length > 0 ? (dataArrayIndex.children = childrenArray) : null;
        if (childrenArray.length > 0) {
            //有儿子节点则递归
            authorityTreeDG(datas, childrenArray);
        }
    }
    return dataArray.filter(item => !isChildCode.includes(item.code));
    // console.log(dataArray.filter(item=>!isChildCode.includes(item.code)))
}
// 处理机构tree
export const renderOrganization = dataArry => {
    return organizationTree(dataArry)
}

function organizationTree(datas) {
    var dataArray = [];
    datas.forEach(function (data) {
        let pid = data.orgFatherId;
        if (!pid) {
            let objTemp = {
                label: data.orgName,
                id: data.orgId,
                remark: data.remark
            };
            dataArray.push(objTemp);
        }
    });
    return organizationTreeDG(datas, dataArray);
}

function organizationTreeDG(datas, dataArray) {
    let isChildCode = []
    for (var j = 0; j < dataArray.length; j++) {
        let dataArrayIndex = dataArray[j];
        let childrenArray = [];
        let code = dataArrayIndex.id;
        for (let i = datas.length - 1; i >= 0; i--) {
            let data = datas[i];
            let pid = data.orgFatherId;
            if (pid == code) {
                //判断是否为儿子节点
                let objTemp = {
                    label: data.orgName,
                    id: data.orgId,
                    remark: data.remark
                };
                childrenArray.push(objTemp);
                isChildCode.push(data.orgId);
            }
        }
        childrenArray.length > 0 ? (dataArrayIndex.children = childrenArray) : null;
        if (childrenArray.length > 0) {
            //有儿子节点则递归
            organizationTreeDG(datas, childrenArray);
        }
    }
    return dataArray.filter(item => !isChildCode.includes(item.code));
}



//处理产品定义树

export const renderProductDefinition = dataArry => {
    return ProductDefinitionTree(dataArry)
}

function ProductDefinitionTree(datas) {
    var dataArray = [];
    datas.forEach(function (data) {
        let pid = data.suppernoteid;
        if (pid == 'r') {
            let objTemp = {
                label: data.prodname,
                id: data.nodeid,
                prodid: data.prodid,
                remark: data.note
            };
            dataArray.push(objTemp);
        }
    });
    return ProductDefinitionDG(datas, dataArray);
}

function ProductDefinitionDG(datas, dataArray) {
    let isChildCode = []
    for (var j = 0; j < dataArray.length; j++) {
        let dataArrayIndex = dataArray[j];
        let childrenArray = [];
        let code = dataArrayIndex.id;
        for (let i = datas.length - 1; i >= 0; i--) {
            let data = datas[i];
            let pid = data.suppernoteid;
            if (pid == code) {
                //判断是否为儿子节点
                let objTemp = {
                    label: data.prodname,
                    id: data.nodeid,
                    prodid: data.prodid,
                    remark: data.note
                };
                childrenArray.push(objTemp);
                isChildCode.push(data.nodeid);
            }
        }
        childrenArray.length > 0 ? (dataArrayIndex.children = childrenArray) : null;
        if (childrenArray.length > 0) {
            //有儿子节点则递归
            ProductDefinitionDG(datas, childrenArray);
        }
    }
    return dataArray.filter(item => !isChildCode.includes(item.code));
}