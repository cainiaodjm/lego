<!--
 * @Author: your name
 * @Date: 2021-07-05 17:23:08
 * @LastEditTime: 2021-07-20 01:49:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lego/src/views/Home.vue
-->
<template>
  <TemplateList :list="testData"></TemplateList>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core";

import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store/index";
import TemplateList from "../components/TemplateList.vue";
export default defineComponent({
  name: "Home",
  components: {
    TemplateList,
  },
  setup() {
    const router = useRouter();
    setTimeout(() => {
      // router.push({
      //   name: "template",
      //   params: { id: 1 },
      // });
    }, 2000);
    const store = useStore<GlobalDataProps>();
    const testData = computed(() => store.state.templates.data);
    return {
      router,
      testData,
    };
  },
});
</script>
<style lang="scss" scoped>
.home-layout {
  .content-container {
    background: #fff;
    padding: 0 24px 24px 30px;
    min-height: 85vh;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    .content-title {
      .hot-title {
        margin: 0 auto;
        padding: 20px 0;
        h2 {
          margin-bottom: 0;
        }
        p {
          text-align: center;
          font-size: 16px;
          color: #666;
        }
      }
      .hot-template {
        font-size: 22px;
        color: #333;
        &::after,
        &::before {
          content: "";
          display: inline-block;
          width: 57px;
          height: 1px;
          margin: 0 26px;
          background-color: #d8d8d8;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
