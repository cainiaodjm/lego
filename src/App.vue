<!--
 * @Author: your name
 * @Date: 2021-07-05 17:23:08
 * @LastEditTime: 2021-07-13 10:56:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lego/src/App.vue
-->
<template>
  <div class="homepage-container">
    <a-layout :style="{ background: '#fff' }">
      <a-layout-header class="header">
        <div class="page-title">
          <router-link to="/">慕课乐高</router-link>
        </div>
        <div class="page-login">
          <UserProfile :user="user"></UserProfile>
        </div>
      </a-layout-header>
      <a-layout-content class="home-layout">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>
<script lang="ts">
import UserProfile from "./components/UserProfile.vue";
import { defineComponent, computed } from "vue";
// import Home from "./views/Home.vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "./store/index";

export default defineComponent({
  name: "App",
  components: {
    // Home,
    UserProfile,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const user = computed(() => store.state.user);
    const templates = computed(() => store.state.templates);
    console.log(user);
    console.log(templates);
    return {
      user,
    };
  },
});
</script>
<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
