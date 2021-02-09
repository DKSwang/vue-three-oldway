<template>
  <div class="template-container">
    <content-wrapper>
      <template v-slot:grid="scope">
        <div style="margin:0 auto;width:450px;">
          <el-form :model="passwordForm" size="small" ref="passwordForm" label-width="100px" :rules="rules">
            <el-form-item label="原密码：" class="br-form-item-label" prop="oldPassword">
              <el-input type="password" class="br-input-large" v-model.trim="passwordForm.oldPassword"></el-input>
            </el-form-item>
            <el-form-item label="新密码：" class="br-form-item-label" prop="newPassword">
              <el-input type="password" class="br-input-large" v-model.trim="passwordForm.newPassword"></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" class="br-form-item-label" prop="confirmPassword">
              <el-input type="password" class="br-input-large" v-model.trim="passwordForm.confirmPassword"></el-input>
            </el-form-item>
          </el-form>
          <div style="text-align:center;width:400px;margin-top:25px;">
            <el-button class="br-btn-large" type="primary" @click="submit">保存</el-button>
            <el-button class="br-btn-large" @click="reset">重置</el-button>
          </div>
        </div>
      </template>
    </content-wrapper>
  </div>
</template>

<script >
import { getCurrentInstance } from "vue";//就是当前实例
import { mapActions, mapState } from 'vuex';
import ContentWrapper from "@/components/ContentWrapper.vue";
import md5 from "md5";
export default {
  name: "modifyPassword",
  checkNewPassword(rule, value, callback) {
    let $ele = this.$refs["passwordForm"];

    var regUpper = /[A-Z]/;
    var regLower = /[a-z]/;
    var regNum = /[0-9]/;
    var regTeShu = new RegExp(
      "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？+-]"
    );
    var complex = 0;
    if (regLower.test(value)) {
      ++complex;
    }
    if (regUpper.test(value)) {
      ++complex;
    }
    if (regNum.test(value)) {
      ++complex;
    }
    if (regTeShu.test(value)) {
      ++complex;
    }
    if (complex < 3 || value.length < 8) {
      callback(
        new Error("长度不小于8位，包含数字、字母大、小写、符号中的至少3种")
      );
    } else {
      if (this.passwordForm.confirmPassword !== "") {
        $ele.validateField("confirmPassword");
      }
      callback();
    }
  },
  checkConfirmPassword(rule, value, callback) {
    if (!value) {
      callback(new Error("请再次输入新密码"));
    } else if (value !== this.passwordForm.newPassword) {
      callback(new Error("两次输入的密码不一致"));
    } else {
      callback();
    }
  },
  data() {
    return {
      this: getCurrentInstance(),
      passwordForm: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      },
      rules: {
        oldPassword: [
          {
            required: true,
            message: "请输入原密码"
          }
        ],
        newPassword: [
          {
            required: true,
            message: "请输入新密码"
          },
          {
            validator: this.checkNewPassword,
            trigger: "blur"
          }
        ],
        confirmPassword: [
          {
            required: true,
            message: "请输入确认密码"
          },
          {
            validator: this.checkConfirmPassword,
            trigger: "blur"
          }
        ]
      }

    }
  },
  components: {
    "content-wrapper": ContentWrapper
  },
  methods: {
    ...mapActions("modifyPassword", ["queryModify"]),
    submit() {
      const that = this;
      let $ele = this.$refs["passwordForm"];
      $ele.validate(valid => {
        if (valid) {
          let param = {
            oldPassword: md5(this.passwordForm.oldPassword),
            newPassword: md5(this.passwordForm.newPassword)
          };
          this.$store.commit('common/saveLoading', true);
          this.queryModify(param).then(res => {
            if (res["code"] == 200) {
              this.$message({
                type: "success",
                message: res.msg,
                onClose: () => {
                  //关闭当前页签
                  this.$bus.$emit("closeTag", {
                    path: this.$route.path
                  });
                  this.$router.go(-1);
                  //   that.$bus.$on("closeTag", '/modifyPassword');
                  that.$router.push({ path: "/home" });
                }
              });
              this.$store.commit('common/saveLoading', false);
            }
          });
        }
      });
    },
    reset() {
      let $ele = this.$refs["passwordForm"];
      $ele.resetFields();
    }
  },



}
</script>

<style scoped lang="scss">
</style>
