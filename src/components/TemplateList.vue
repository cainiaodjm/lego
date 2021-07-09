<!--
 * @Author: your name
 * @Date: 2021-07-05 19:01:53
 * @LastEditTime: 2021-07-09 18:57:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lego/src/components/TemplateList.vue
-->
<template>
  <div class="template-list-component">
    <a-row :gutter="16">
      <a-col :span="6" v-for="item in list" :key="item.id" class="post-item">
        <router-link :to="`/template/${item.id}`">
          <a-card hoverable>
            <template #cover>
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
              <div class="hover-item">
                <a-button size="large" type="primary">使用该模板创建</a-button>
              </div>
            </template>
            <a-card-meta :title="item.title">
              <template #description>
                <div class="description-detail">
                  <span>作者:{{ item.author }}</span>
                  <span>{{ item.useNumber }}</span>
                </div>
              </template>
            </a-card-meta>
          </a-card>
        </router-link>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "TemplateList",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.post-item {
  .ant-card-hoverable {
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
  }
  .ant-card {
    border-radius: 12px;
  }
  .ant-card-meta-title {
    color: #333;
    padding: 10px 12px;
    border-bottom: 1px solid #f2f2f2;
    margin-bottom: 0 !important;
  }
  .ant-card-meta-title {
    font-size: 28px;
  }

  .ant-card-meta {
    .ant-card-meta-title {
      font-size: 28px;
    }
  }
}
.description-detail {
  display: flex;
  justify-content: space-between;
}
</style>
