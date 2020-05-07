/*
每个模块的请求函数
每个函数的返回值都是promise对象
*/
import ajax from "./ajax";

//用户接口
const login = (params) => ajax('/login',params,'POST');
const addUser = (params) => ajax('/manage/user/add',params,'POST');
const updateUser = (params) => ajax('/manage/user/update',params,'POST');
const getUserList = (params) => ajax('/manage/user/list',params,'GET');
const delUser = (params) => ajax('/manage/user/delete',params,'POST');
//列表接口
const towList = (params) => ajax('/manage/category/list',params,'GET');
const addType = (params) => ajax('/manage/category/add',params,'POST');
const updateType = (params) => ajax('/manage/category/update',params,'POST');
const getTypeById = (params) => ajax('/manage/category/info',params,'GET');
//商品
const getProduct = (params) => ajax('/manage/product/list',params,'GET');


export{
    login,
    addUser,
    updateUser,
    getUserList,
    delUser,
    towList,
    addType,
    updateType,
    getTypeById,
    getProduct
}


