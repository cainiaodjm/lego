/*
 * @Author: your name
 * @Date: 2021-07-19 01:34:57
 * @LastEditTime: 2021-07-20 01:33:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lego/src/store/templates.ts
 */
import { Module } from "vuex";
import { GlobalDataProps } from "./index";
export interface TemplateProps {
  id: number;
  title: string;
  coverImg: string;
  author: string;
  copiedCount: number;
}

const testData: TemplateProps[] = [
  {
    id: 1,
    title: "template-1",
    coverImg: "https://jdc.jd.com/img/600x800?text=template-1",
    author: "jack",
    copiedCount: 1,
  },
  {
    id: 2,
    title: "template-2",
    coverImg: "https://jdc.jd.com/img/600x800?text=template-2",
    author: "jack",
    copiedCount: 2,
  },
  {
    id: 3,
    title: "template-3",
    coverImg: "https://jdc.jd.com/img/600x800?text=template-3",
    author: "jack",
    copiedCount: 3,
  },
  {
    id: 4,
    title: "template-4",
    coverImg: "https://jdc.jd.com/img/600x800?text=template-4",
    author: "jack",
    copiedCount: 4,
  },
  {
    id: 5,
    title: "template-5",
    coverImg: "https://jdc.jd.com/img/600x800?text=template-5",
    author: "jack",
    copiedCount: 5,
  },
  {
    id: 6,
    title: "template-1",
    coverImg: "https://jdc.jd.com/img/600x800?text=template-6",
    author: "jack",
    copiedCount: 6,
  },
];
export interface TemplatesProps {
  data: TemplateProps[];
}
//Module 第一个泛型为本地的State 后面为全局的泛型
const templates: Module<TemplatesProps, GlobalDataProps> = {
  state: {
    data: testData,
  },
  getters: {
    getTemplateById: (state, getters, rootState) => (id: number) => {
      // rootState.templates.data
      return state.data.find((t) => t.id === id);
    },
  },
};

export default templates;
