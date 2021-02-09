<template>
  <div class="tags-container">
    <div class="tags-list-container" @mousewheel="onmousewheel">
      <span :class="['elleft']" @click="handleScroll(120)">
        <i class="el-icon-arrow-left"></i>
      </span>
      <span :class="['elright']" @click="handleScroll(-120)">
        <i class="el-icon-arrow-right"></i>
      </span>
      <div class="tags-list-wrapper" ref="list-container">
        <transition name="bounce" mode="in-out">
          <ul class="tags-list" ref="tags-container">
            <li class="tags-item" v-for="(item,index) in tags" :key="index">
              <div v-bind:class="$route.fullPath==item.path?['select-item tags-item-button']:['tags-item-button']" @click="handelOnclik(item,index)">
                {{item.title}}
                <span @click.prevent="deleteTag(item,$event)" style="padding:0 5px" v-if="item.title!='首页'">
                  <i class="el-icon-close"></i>
                </span>
              </div>
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </div>
</template>

<script >
import { getCurrentInstance } from "vue";//就是当前实例
export default {
  name: 'Tages',
  data() {
    return {
      this: getCurrentInstance(),
      tags: [],
      isShow: false,
      translatePosition: 0
    }
  },
  watch: {
    "$route"(val, oldVal) {
      this.setTags(val);
      this.selectItemScrollIntoView();
    }
  },
  methods: {
    selectItemScrollIntoView() {
      this.$nextTick(() => {
        let selectEle = document.getElementsByClassName("select-item")[0];
        let leftOffset = selectEle.offsetLeft;
        let widthOffset = selectEle.offsetWidth;
        let containerWidth = this.$refs["list-container"]["offsetWidth"];
        if (leftOffset + this.translatePosition + widthOffset > containerWidth) {
          this.handleScroll(
            -(
              leftOffset +
              this.translatePosition +
              widthOffset +
              2 -
              containerWidth
            )
          );
        }
        if (leftOffset + this.translatePosition + widthOffset < 0) {
          this.handleScroll(-this.translatePosition - leftOffset);
        }
      });
    },
    handleScroll(offset) {
      //tags-list
      let targetEl = this.$refs["tags-container"];
      //tags-list.offsetWidth
      var targetElWidth = targetEl["offsetWidth"];
      var containerWidth = this.$refs["list-container"]["offsetWidth"];
      if (offset > 0) {
        //	鼠标向上滚动  元素向右移动  视图向左移动
        //  this.translatePosition<0
        if (this.translatePosition < 0) {
          let remainOffset = -this.translatePosition;
          offset = Math.min(remainOffset, offset);
        } else {
          return;
        }
      } else {
        //	鼠标向下滚动  元素向左移动  视图向右移动
        // tags-list.offsetWidth>tags-list-containers.offsetWidth;
        // tags-list-container.offsetWidth-this.translatePosition<tags-list.offsetWidth;
        if (targetElWidth > containerWidth) {
          if (containerWidth - this.translatePosition < targetElWidth) {
            let remainOffset =
              targetElWidth - (containerWidth - this.translatePosition);
            offset = Math.min(remainOffset, offset);
          } else {
            return;
          }
        } else {
          return;
        }
      }
      this.translatePosition += offset;
      targetEl["style"].left = `${this.translatePosition}px`;
    },
    handelOnclik(item, index) {
      if (index == 0 || index == 1) {
        this.$refs["tags-container"]["style"]["margin-left"] = `0px`;
      }
      this.$router.push(item.path);
    },
    //设置标签
    setTags(route) {
      const isExist = this.tags.some(item => {
        return item["path"] == route.fullPath;
      });
      const isExistName = this.tags.some(item => {
        return route.name ? item["name"] == route.name : false;
      });

      let ExistIndex = 0;

      ExistIndex = this.tags.map(i => i.name).indexOf(route.name);

      if (!isExist) {
        var tags = [...this.tags];
        if (isExistName && !route.meta.multi) {
          //目前的tags已存在点击的这个路由
          tags[ExistIndex] = {
            title: route.meta.name,
            name: route.name,
            path: route.fullPath
          };
        } else {
          tags.push({
            title: route.meta.name,
            name: route.name,
            path: route.fullPath
          });
        }
        this.tags = [...tags];
        this.$emit("tagschange", tags);
      }
    },
    deleteTagByBus(item) {
      var tags = [...this.tags];
      for (let i in tags) {
        if (tags[i]["name"] == item.name || tags[i]["path"] == item.path) {
          tags.splice(Number(i), 1);
        }
      }
      this.tags = [...tags];
      this.$emit("tagschange", tags);
    },
    deleteTag(item, $event) {
      $event.stopPropagation();
      var tags = [...this.tags];
      for (let i in tags) {
        if (tags[i]["path"] == item.path) {
          tags.splice(Number(i), 1);
          if (tags.length == 0) {
            this.$router.push("/home");
            this.tags = [];
            return;
          }
          if (item.path == this.$route.fullPath) {
            if (Number(i) == 0) {
              this.$router.push(tags[i]["path"]);
            } else {
              this.$router.push(tags[Number(i) - 1]["path"]);
            }
          }
        }
      }
      this.tags = [...tags];
      this.$emit("tagschange", tags);
    },
    closeOthers() {
      var route = this.$route;
      var homeTag = this.tags.filter(item => {
        return item["title"] == "首页";
      });
      var tags = [
        {
          title: route.meta.name,
          name: route.name,
          path: route.fullPath
        }
      ];
      if (route.fullPath == "/home") {
        this.tags = [...tags];
      } else {
        this.tags = [...homeTag, ...tags];
      }
      this.$emit("tagschange", this.tags);
    },
    closeAll() {
      var route = this.$route;
      if (!(route.fullPath == "/home" && this.tags.length == 1)) {
        this.tags = [];
        this.$emit("tagschange", this.tags);
        this.$router.push("/home");
      }
    },
    onclose(command) {
      switch (command) {
        // 关闭其他
        case "co":
          this.closeOthers();
          break;
        // 关闭所有
        case "ca":
          this.closeAll();
          break;
        default:
          break;
      }
    },
    getWidthCompareResult(position) {
      let targetEl = this.$refs["tags-container"];
      //tags-list.offsetWidth
      if (targetEl) {
        var targetElWidth = targetEl["offsetWidth"];
        var containerWidth = this.$refs["list-container"]["offsetWidth"];
        if (position == "left") {
          return (
            containerWidth + Math.abs(this.translatePosition) >= targetElWidth
          );
        } else {
          return this.translatePosition == 0;
        }
      } else {
        return true;
      }
    },
    onmousewheel(e) {
      e.preventDefault();
      if (e.wheelDelta > 0) {
        //鼠标向上滑动
        this.handleScroll(+30);
      } else if (e.wheelDelta < 0) {
        //鼠标向下滑动
        this.handleScroll(-30);
      }
    }
  },

  created() {
    var homeTag = [
      {
        title: "首页",
        name: "home",
        path: "/home"
      }
    ];
    this.tags = [...homeTag];
    this.setTags(this.$route);
  },
  mounted() {
    this.$bus.$on("closeTag", val => {
      this.deleteTagByBus(val);
    });
  }
}



</script>

<style scoped lang="scss">
$tagHeight: 40px;
.tags-container {
  height: $tagHeight;
  background-color: #fff;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  border-top: 1px #e8ecef solid;
  box-shadow: 0px 10px 8px -6px rgba(0, 0, 0, 0.1);
  z-index: 2;
  .tags-list-container {
    font-size: 12px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    height: $tagHeight;
    .elleft {
      position: absolute;
      left: 0;
      top: 0;
      height: $tagHeight;
      line-height: 48px;
      width: 20px;
      text-align: center;
      background-color: #fff;
      cursor: pointer;
      & > i {
        font-size: 16px;
        color: #666;
      }
      &.disabled {
        & > i {
          color: #f1f1f1;
        }
        cursor: not-allowed;
      }
    }
    .elright {
      position: absolute;
      right: 3px;
      top: 0;
      height: $tagHeight;
      line-height: 48px;
      width: 20px;
      text-align: center;
      background-color: #fff;
      cursor: pointer;
      & > i {
        font-size: 16px;
        color: #666;
      }
      &.disabled {
        & > i {
          color: #f1f1f1;
        }
        cursor: not-allowed;
      }
    }
    .tags-list-wrapper {
      position: relative;
      overflow: hidden;
      height: $tagHeight;
      .tags-list {
        overflow-y: hidden;
        overflow-x: auto;
        box-sizing: border-box;
        width: auto;
        white-space: nowrap;
        position: absolute;
        left: 0;
        top: 0;
        transition: left 0.3s linear;
        .tags-item {
          height: 33px;
          margin: 0 2px;
          padding-top: 7px;
          display: inline-block;
          .tags-item-button {
            height: 36px;
            line-height: 33px;
            padding: 0 15px;
            border: 1px solid #e8ecef;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            font-family: PingFangSC-Regular;
            color: #333;
            cursor: pointer;
            font-size: 14px;
          }
          .tags-item-button.select-item {
            color: #409eff;
          }
        }
      }
    }
  }
}
</style>
