<template>
  <div class="login-container">
    <van-nav-bar title="登录" />
    <van-form @submit="onSubmit" ref="from">
      <van-field
        type="number"
        maxlength="11"
        v-model="user.mobile"
        name="mobile"
        required
        clearable
        placeholder="手机号"
        :rules="rules.mobile"
      >
        <template #left-icon>
          <TouTiaoIcon icon="shouji"></TouTiaoIcon>
        </template>
      </van-field>
      <van-field
        type="number"
        maxlength="6"
        v-model="user.code"
        required
        clearable
        name="code"
        placeholder="验证码"
        :rules="rules.code"
      >
        <template #left-icon>
          <TouTiaoIcon icon="yanzhengma"></TouTiaoIcon>
        </template>
        <template #button>
          <!-- isShow为false 显示发送验证码
            isShow为true 则显示倒计时
             倒计时结束时会触发finish事件 显示发送验证码 -->
          <van-count-down
            :time="5000"
            format="ss s"
            v-if="isShow"
            @finish="isShow = false"
          />
          <van-button
            v-else
            class="send-sms-btn"
            size="small"
            native-type="button"
            @click="sendSmCode"
            :disabled="isDisabled"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { login, getCode } from '@/api/user'
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data() {
    return {
      isDisabled: false, // 禁用
      isShow: false, // 显示发送验证码或倒计时
      user: {
        // 收集用户信息
        mobile: '13911111112',
        code: '246810'
      },
      rules: {
        // 定义校验规则
        mobile: [
          {
            required: true,
            message: '手机号不能为空'
          },
          {
            pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
            message: '手机号不符合格式'
          }
        ],
        code: [
          { required: true, message: '验证码不能为空' },
          {
            pattern: /^\d{6}$/,
            message: '验证码不符合格式'
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 通过校验,发送请求 1
    // async onSubmit(values) {
    //   const res = await login(values)
    //   console.log(res)
    // }

    // 2
    async onSubmit() {
      try {
        const res = await login(this.user)
        console.log(res)
        Toast.success('登录成功')
      } catch (e) {
        Toast.fail(e?.response?.data?.message || '登录失败')
      }
    },
    async sendSmCode() {
      try {
        // 验证表单的手机号
        await this.$refs.from.validate('mobile')
      } catch (error) {
        console.log(error)
        return
      }
      try {
        // 通过校验之后把isDisabled改为true 开启禁用
        this.isDisabled = true
        // 获取验证码
        const res = await getCode(this.user.mobile)
        console.log(res)
        this.isShow = true
        Toast.success('发送成功')
      } catch (e) {
        Toast.fail(e?.response?.data?.message || '发送失败')
        this.isShow = false
      } finally {
        // 不管失败或成功 解除禁用
        this.isDisabled = false
      }
    }
  }
}
</script>
<style scoped lang="less">
.login-container {
  .toutiao {
    font-size: 37px;
  }
  .send-sms-btn {
    width: 156px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
  }
}
</style>
