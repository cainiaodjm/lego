<!--
 * @Author: your name
 * @Date: 2021-07-05 17:23:08
 * @LastEditTime: 2021-07-09 18:54:00
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
      </a-layout-header>
      <a-layout-content class="home-layout">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// import Home from "./views/Home.vue";

export default defineComponent({
  name: "App",
  components: {
    // Home,
  },
});
</script>
<style lang="scss"></style>
