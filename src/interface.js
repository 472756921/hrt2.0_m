/**
 * Created by Benson on 2018/1/8.
 */

const host = 'http://www.schrtinfo.com/assistant/app/api';
//  const host = 'http:// 192.168.0.141:8081/app/api';

// 图片上传
export const uploadImg = function () {
    const URL = '/base/uploadImg';
    const API = host + URL;
    return API;
};
export const detail = function () {
    const URL = '/team/detail?id=';
    const API = host + URL;
    return API;
};
// 获取服务用户列表
export const userServicies = function () {
    const URL = '/health/userServicies';
    const API = host + URL;
    return API;
};
// 获取用户列表
export const usersList = function () {
    const URL = '/health/users';
    const API = host + URL;
    return API;
};
// 获取团队坐诊时间列表
export const teamGroupTime = function () {
    const URL = '/team/teamGroupTime';
    const API = host + URL;
    return API;
};
// 健管师登录
export const ajaxLogin = function () {
    const URL = '/login/ajaxLogin';
    const API = host + URL;
    return API;
};
// 健管师信息
export const Hdetail = function () {
    const URL = '/health/detail';
    const API = host + URL;
    return API;
};
// 用户基本信息
export const userdetail = function () {
    const URL = '/customer/user/detail';
    const API = host + URL;
    return API;
};
// 用户云设备
export const equipment = function () {
    const URL = '/customer/user/could/equipment';
    const API = host + URL;
    return API;
};
// 获取用户个人消费记录
export const getCustomerHistoryOrder = function () {
    const URL = '/customer/getCustomerHistoryOrder';
    const API = host + URL;
    return API;
};
// 获取用户个人服务余额
export const getCustomerServiceDetial = function () {
    const URL = '/customer/getCustomerServiceDetial';
    const API = host + URL;
    return API;
};
// 获取用户个人服务记录
export const getServiceDetial = function () {
    const URL = '/customer/getServiceDetial';
    const API = host + URL;
    return API;
};
// 获取用户个人服务记录
export const findChatLog = function () {
    const URL = '/messageLog/findChatLog';
    const API = host + URL;
    return API;
};
// 获取用户个人服务记录
export const addChatLog = function () {
    const URL = '/messageLog/addChatLog';
    const API = host + URL;
    return API;
};
// 设置团队坐诊时间
export const saveGroupTime = function () {
    const URL = '/team/saveGroupTime';
    const API = host + URL;
    return API;
};
