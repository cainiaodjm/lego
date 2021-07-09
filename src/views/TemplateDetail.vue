<!--
 * @Author: your name
 * @Date: 2021-07-07 00:53:31
 * @LastEditTime: 2021-07-09 19:00:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lego/src/views/TemplateDetail.vue
-->
<template>
  <div>
    <div class="use-button">
      <router-link to="/editor">
        <a-button type="primary" size="large">使用模板</a-button>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "TemplateDetail",
});
</script>
