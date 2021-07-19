/*
 * @Author: your name
 * @Date: 2021-07-20 01:35:39
 * @LastEditTime: 2021-07-20 01:48:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lego/src/store/user.ts
 */
import { Module } from "vuex";
import { GlobalDataProps } from "./index";
export interface UserProps {
  isLogin: boolean;
  userName?: string;
}
const user: Module<UserProps, GlobalDataProps> = {
  state: {
    isLogin: false,
    userName: "jack",
  },
  mutations: {
    login(state) {
      state.isLogin = true;
      state.userName = "mark";
    },
    logout(state) {
      state.isLogin = false;
    },
  },
};
export default user;
