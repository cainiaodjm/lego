<!--
 * @Author: your name
 * @Date: 2021-07-05 17:23:08
 * @LastEditTime: 2021-07-09 17:02:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lego/src/views/Home.vue
-->
<template>
  <TemplateList :list="list"></TemplateList>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import TemplateList from "../components/TemplateList.vue"
export default defineComponent({
  name: "Home",
  components: {
    TemplateList,
  },
  setup() {
    return {
      list: [
        {
          id: 1,
          title: "list-1",
          author: "A",
          useNumber: 123,
        },
        {
          id: 2,
          title: "list-2",
          author: "A",
          useNumber: 123,
        },
        {
          id: 3,
          title: "list-3",
          author: "A",
          useNumber: 123,
        },
        {
          id: 4,
          title: "list-4",
          author: "A",
          useNumber: 123,
        },
      ],
    }
  },
})
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
