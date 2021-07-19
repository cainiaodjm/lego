/*
 * @Author: your name
 * @Date: 2021-07-05 17:23:08
 * @LastEditTime: 2021-07-20 01:45:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lego/src/store/index.ts
 */
import { createStore } from "vuex";
import templates, { TemplatesProps } from "./templates";
import user, { UserProps } from "./user";

export interface GlobalDataProps {
  user: UserProps;
  templates: TemplatesProps;
}

export default createStore({
  mutations: {},
  actions: {},
  modules: {
    user,
    templates,
  },
});
