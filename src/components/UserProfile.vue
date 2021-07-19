<template>
  <div>
    <a-button type="primary" v-if="!user.isLogin" @click="login">登录</a-button>
    <div v-else>
      <a-dropdown-button>
        <router-link to="/setting">{{ user.userName }}</router-link>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0" @click="logout"> 登出</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown-button>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";

import { defineComponent, PropType } from "vue";

import { UserProps } from "../store/user";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "UserProfile",

  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    console.log(this);
    const login = () => {
      store.commit("login");
      message.success("登录成功", 2);
    };
    const logout = () => {
      store.commit("logout");
      message.success("退出登录成功,2秒后跳转到首页", 2);

      setTimeout(() => {
        router.push("/");
      }, 2000);
    };
    return {
      store,
      logout,
      login,
    };
  },
});
</script>
