<!--
 * @Author: your name
 * @Date: 2021-07-07 00:53:31
 * @LastEditTime: 2021-07-20 01:30:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lego/src/views/TemplateDetail.vue
-->
<template>
  <div class="work-detail-container">
    <a-row type="flex" justify="center" v-if="template">
      <a-col :span="8" class="cover-img">
        <img :src="template.coverImg" alt="" />
      </a-col>
      <a-col :span="8">
        <h2>{{ template.title }}</h2>
        <p>{{ template.title }}</p>
        <div class="author">
          <a-avatar>V</a-avatar>
          该模板由
          <b>{{ template.author }}</b>
          创作
        </div>
      </a-col>
    </a-row>
  </div>
  <div>
    <div class="use-button">
      <router-link to="/editor">
        <a-button type="primary" size="large">使用模板</a-button>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store/index";
import { TemplatesProps } from "../store/templates";
export default defineComponent({
  name: "TemplateDetail",
  setup() {
    const route = useRoute();
    const store = useStore<GlobalDataProps>();
    const currentId = route.params.id as string;
    const template = computed<TemplatesProps>(() =>
      store.getters.getTemplateById(parseInt(currentId))
    );
    return {
      route,
      template,
    };
  },
});
</script>
