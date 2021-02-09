<template>
  <div style="height:100%;width:100%">
    <div :class='["sider-bar",menuCollapse?"sider-bar-collapse":""]'>
      <div class="logo">
        <router-link to="/home">
          <img src="../assets/images/logoVue.png" style="width:32px;">
          <h1 v-if="!menuCollapse">前端基础框架</h1>
        </router-link>
      </div>

      <!-- $route.path -->
      <el-menu :default-active="$route.path" style="min-height: 100%;" router :class='["br-menu menu-content",menuCollapse?"menu-content-collapse":""]' :collapse="menuCollapse" :collapse-transition="true" :unique-opened="true">
        <template v-for="(item,index) in menu">
          <!--第二级菜单-->
          <el-submenu v-if="item.children" :key="item.code" :index="item.code?item.code:''">
            <template #title>
              <i :class="item.icon" style="margin-right:10px"></i>
              <span>{{item.title}}</span>
            </template>
            <template v-for="(item,index) in item.children">
              <!--有子节点 第二级菜单-->
              <el-submenu v-if="item.children" :key="item.code" :index="item.code?item.code:''">
                <template #title>
                  <i :class="item.icon"></i>
                  <span>{{item.title}}</span>
                </template>
                <el-menu-item v-for="(item,index) in item.children" :key="item.code" :index="item.code?item.code:''">
                  <!-- 第三级菜单 -->
                  <template #title>
                    <i :class="item.icon"></i>
                    <span>{{item.title}}</span>
                  </template>
                </el-menu-item>
              </el-submenu>
              <!--没有子节点的 二级菜单-->
              <el-menu-item v-if="!item.children" :key="item.code" :index="item.path?item.path:''">
                <template #title>
                  <i :class="item.icon"></i>
                  <span>{{item.title}}</span>
                </template>
              </el-menu-item>
            </template>
          </el-submenu>

          <!-- 只有一级的菜单 -->
          <el-menu-item v-else :key="index" :index="item.path?item.path:''">
            <i v-bind:class="item.icon" style="margin-right:10px"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </el-menu>

    </div>

    <div style="height:calc( 100% )">
      <div style="height: 100%;position:relative">
        <div :class='["content",menuCollapse?"content-collapse":""]'>
          <div class="header">
            <div class="collapse-icon">
              <i :class='["iconfont",menuCollapse?"icon-zhankai":"icon-shouqi"]' @click="menuCollapse=!menuCollapse"></i>
            </div>
            <div class="header-operations">
              <el-badge :value="messageCount" :max="99" class="bell" :hidden="messageCount == 0">
                <i class="el-icon-bell" @click="" style="cursor:pointer;"></i>
              </el-badge>

              <span class="zoom" @click="handleFullScreen">
                <i v-if="!zoom" class="iconfont icon-quanping"></i>
                <i v-if="zoom" class="iconfont icon-suofang"></i>
              </span>

              <span class="international">
                欢迎您! {{ loginData.userName }}
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    <i class="el-icon-caret-bottom"></i>
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>
                        <!-- <span @click="modifyPassword" style="font-size:14px;">修改密码</span> -->
                        <router-link to="/modifyPassword" tag="span" style="font-size:14px;">修改密码</router-link>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <span @click="handelLogout" style="font-size:14px;">退出登录</span>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </span>
              <i class="setting el-icon-s-tools" @click="showPannel=true;"></i>
              <span class="system-time">{{$moment().format("YYYY-MM-DD")}}</span>
            </div>
          </div>
          <tags @tagschange="ontagschange" v-if="needTags"></tags>
          <div style="padding:18px;overflow:auto;box-sizing:border-box;height:calc( 100% - 93px )">
            <router-view v-slot="{ Component }">
              <transition name="router-fade" mode="out-in">
                <keep-alive :include="tagsList.map(i=>i.name)">
                  <component :is="Component" />
                </keep-alive>
              </transition>
            </router-view>
            <!-- <keep-alive :include="tagsList.map(i=>i.name)">
              <router-view></router-view>
            </keep-alive> -->
          </div>
          <right-panel :showPannel="showPannel" @close="(val)=>{showPannel=val;}">
            <settings />
          </right-panel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCurrentInstance } from "vue";//就是当前实例
import { mapActions, mapState } from 'vuex';
import { Base64 } from "js-base64";
import { setStore, getStore, removeStore } from "@/config/mUtils";
import tags from "./tags.vue";
import RightPanel from "./RightPanel.vue";
import Settings from "./setting.vue";
export default {
  data() {
    return {
      this: getCurrentInstance(),
      menuCollapse: false,
      menu: [],
      loginData: {},
      tagsList: [],
      showPannel: false,
      zoom: false,
      messageCount: 10
    }
  },
  components: {
    tags,
    RightPanel,
    Settings
  },
  methods: {
    ...mapActions("login", ["UserlogOut"]),
    ontagschange(tags) {
      this.tagsList = [...tags];
    },
    //退出登录
    handelLogout() {
      this.$confirm("确定退出登录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.UserlogOut({})
            .then(res => {
              if (res.code == 200) {
                this.$message({
                  type: "success",
                  message: res.msg
                });

                removeStore("menu");
                removeStore("token");
                removeStore("userInfo");
              } else {
                this.$message({
                  type: "error",
                  message: res.msg
                });
              }
              this.$router.replace({
                path: "/"
              });
            })
            .catch(err => {
              this.$router.replace({
                path: "/"
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    },
    handleFullScreen() {
      if (!this.zoom) {
        //放大到全屏
        let docEle = window.document.documentElement;
        let rfs =
          docEle.requestFullscreen ||
          docEle.webkitRequestFullscreen ||
          docEle.mozRequestFullScreen ||
          docEle.msRequestFullScreen;
        rfs && rfs.call(docEle);
      } else {
        //缩放回正常状态
        var document = window.document;
        document.exitFullscreen && document.exitFullscreen();
        document.webkitExitFullscreen && document.webkitExitFullscreen();
        document.webkitCancelFullScree && document.webkitCancelFullScree();
        document.mozCancelFullScreen && document.mozCancelFullScreen();
        document.msExitFullScreen && document.msExitFullScreen();
      }
      this.zoom = !this.zoom;
    }
  },
  computed: {
    ...mapState("common", [
      "needTags",
    ])
  },
  created() {
    let tempmenu = getStore("menu");
    this.menu = JSON.parse(Base64.decode(tempmenu));
    let userInfo = getStore("userInfo");
    this.loginData = JSON.parse(Base64.decode(userInfo));
  },
  mounted() {
    let that = this;
    //为了防止火狐浏览器拖拽的时候以新标签打开
    document.body.ondrop = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };
    document.addEventListener(
      "fullscreenchange",
      function () {
        that.zoom = document.fullscreen ? true : false;
      },
      false
    );

    document.addEventListener(
      "mozfullscreenchange",
      function () {
        that.zoom = document["mozFullScreen"] ? true : false;
      },
      false
    );

    document.addEventListener(
      "webkitfullscreenchange",
      function () {
        that.zoom = document["webkitIsFullScreen"] ? true : false;
      },
      false
    );
    document.addEventListener(
      "msfullscreenchange",
      function () {
        that.zoom = document["msFullscreenElement"] ? true : false;
      },
      false
    );
  }
}
</script>
 <style lang="scss" scoped>
$headerFontSize: 12px;
$headerHeight: 52px; //头部高度
$slideWidth: 200px; //侧边栏宽度
$slideCollapseWidth: 56px; //侧边栏收起的宽度
$slideBg: #001529; //侧边栏背景色
$sildeFontColorOneMenu: hsla(0, 0%, 100%, 0.65); //侧边栏一级菜单字体颜色
$sildeFontColorTwoMenu: hsla(0, 0%, 100%, 0.65); //侧边栏二级菜单字体颜色
$slideIconColor: hsla(0, 0%, 100%, 0.65); //侧边栏菜单icon颜色
$sildeActiveBg: #409eff; //侧边栏高亮菜单背景色
$sildeActiveColor: #fff; //侧边栏高亮菜单字体颜色 以及鼠标滑过字体颜色
$sildeHoverBG: #001529; //侧边栏鼠标滑过背景色
$logoBg: #002140; //logo部分背景色
$logoTextColor: #fff; //logo部分字体颜色
// 主内容
.content {
  height: 100%;
  background-color: #f5f7fa;
  position: absolute;
  top: 0;
  bottom: 0;
  left: $slideWidth;
  right: 0;
  overflow: auto;
  transition: all 0.3s;
}

.content-collapse {
  left: $slideCollapseWidth;
}
// 头部
.header {
  height: $headerHeight;
  background-color: #fff;

  .collapse-icon {
    display: inline-block;
    line-height: $headerHeight;
    box-sizing: border-box;
    padding: 0 24px;
    text-align: center;

    i {
      font-size: 18px;
      color: #96a2b4;
      cursor: pointer;

      &:hover {
        color: #409eff;
      }
    }
  }

  .header-operations {
    float: right;
    height: $headerHeight;
    color: rgba(0, 0, 0, 0.65);
    line-height: $headerHeight;
    padding-right: 20px;
    font-size: $headerFontSize;
    .bell {
      height: 30px;
      line-height: 30px;
      margin: 4px 10px 0;
      i {
        font-size: 20px;
      }

      .el-badge__content {
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
          Microsoft YaHei, SimSun, sans-serif;
      }
    }

    .zoom {
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
      margin: 0 10px;
    }
    .setting {
      font-size: 18px;
      cursor: pointer;
      vertical-align: middle;
      margin-bottom: 3px;
    }
    .international {
      margin: 0 10px;
    }
    .system-time {
      display: inline-block;
      vertical-align: middle;
      margin: 0 10px;
    }
  }
}

// 侧边栏
.sider-bar {
  background-color: $slideBg;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  position: absolute;
  padding-bottom: 40px;
  overflow: hidden;
  width: $slideWidth;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  box-sizing: border-box;
  transition: all 0.3s;
  padding-bottom: $headerHeight;

  .br-menu {
    background-color: $slideBg;
    border-right: none;

    /deep/ .el-submenu {
      .el-submenu__title {
        color: $sildeFontColorOneMenu;
        background-color: $slideBg;
        i {
          color: $slideIconColor;
        }

        &:hover {
          color: $sildeActiveColor;
          background-color: $sildeHoverBG;
        }
      }

      .el-menu-item {
        background-color: $slideBg;
        color: $sildeFontColorTwoMenu;
        border-left: 4px solid transparent;

        &:hover {
          color: $sildeActiveColor;
          background-color: $sildeHoverBG;
        }

        &.is-active {
          color: $sildeActiveColor;
          background-color: $sildeActiveBg;
        }
      }
    }

    & > .el-menu-item {
      color: $sildeFontColorOneMenu;

      i {
        color: $slideIconColor;
      }
    }

    & > .el-menu-item:hover {
      color: $sildeActiveColor;
      background-color: $sildeHoverBG;
    }

    & > .el-menu-item.is-active {
      color: $sildeActiveColor;
      background-color: $sildeActiveBg;
    }
  }

  .menu-content {
    width: $slideWidth;
    height: 100%;
    min-height: auto;
    overflow-y: scroll;
    transition: all 0.3s;
  }

  .menu-content::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 0px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 0px;
  }

  .menu-content::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #535353;
  }

  .menu-content::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #ededed;
  }

  .menu-content-collapse {
    width: 76px;
  }

  .logo {
    height: $headerHeight;
    position: relative;
    line-height: $headerHeight;
    padding-left: 14px;
    transition: all 0.3s;
    overflow: hidden;
    background: $logoBg;

    img {
      vertical-align: middle;
    }

    h1 {
      font-size: 20px;
      margin: 0 0 0 12px;
      font-family: Myriad Pro, Helvetica Neue, Arial, Helvetica, sans-serif;
      font-weight: 600;
      display: inline-block;
      height: 32px;
      line-height: 32px;
      vertical-align: middle;
      color: $logoTextColor;
    }
  }
}

.sider-bar-collapse {
  width: $slideCollapseWidth;
}
</style>