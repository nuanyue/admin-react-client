/*
进行loacl数据存储管理工具
 */
import store from 'store' //兼容各个浏览器 语法简介
const USER_KEY = 'user_key'
export default {
    /*保存user*/
    saveUser(user) {
        //localStorage接收的是字符串 因此要json转换 浏览器兼容不好 因此不使用
        // localStorage.setItem(USER_KEY,JSON.stringify(user))
        store.set(USER_KEY, user)

    },
    /*得到user*/
    getUser(user) {
        // return localStorage.getItem(USER_KEY)
        return store.get(USER_KEY) || {}
    },
    /*移除user*/
    removeUser() {
        //    localStorage.removeItem(USER_KEY)
        store.remove(USER_KEY)
    }
}