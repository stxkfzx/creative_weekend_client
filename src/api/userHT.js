import axios from 'axios';
import { req } from './axiosFun';
// const Domain = 'http://www.xlmx.xyz:8085'
const Domain = 'http://127.0.0.1:8085'
// 注册接口(*)
export const register = (data) => {return req('post',`${Domain}/api/users/register`,data)}

// 获取所有用户(*)
export const allusers = (params) => {return axios.get(`${Domain}/api/users/alls/${params}`)}
