<template>
  <ContentBase>
    <div class="row justify-content-md-center">
      <div class="col-3">
        <!-- 事件提交(拒绝原本提交事件的发生) -->
        <form @submit.prevent="login">
          <div class="mb-3">
            <labelsds for="exampleInputEmail1" class="form-label"
              >用户名</labelsds
            >
            <input
              v-model="username"
              type="text"
              class="form-control"
              id="username"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">密码</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="password"
            />
          </div>
          <div class="error_message">{{ error_message }}</div>
          <button type="submit" class="btn btn-primary">登录</button>
        </form>
      </div>
    </div>
  </ContentBase>
</template>
  
<script>
import ContentBase from "../components/ContentBase.vue";
import { ref } from "vue";

export default {
  name: "LoginView",
  components: {
    ContentBase,
  },
  setup() {
    let username = ref("");
    let password = ref("");
    let error_message = ref("");
    const login = () => {
      //提交后的事件
      console.log(username.value, password.value);
    };

    return {
      username,
      password,
      error_message,
      login,
    };
  },
};
</script>


<style scoped>
button {
  width: 100%;
}

.error-message {
  color: red;
}
</style>