import axios from 'axios';
import qs from 'qs';

const service = axios.create({
    baseURL: 'http://localhost:3000', // 可根据process的参数来区分，这样上线不用手动修改
    timeout: 10000,
    responseType: 'json',
    withCredentials: true, // 是否允许带cookie这些
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
});

// POST 传参序列化
service.interceptors.request.use(
    config => {
        if (config.method === 'post') config.data = qs.stringify(config.data);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
// 返回状态判断
service.interceptors.response.use(
    res => {
        return res.data;
    },
    error => {
        return Promise.reject(error);
    }
);

export default {
    post(url, data) {
        return service({
            method: 'post',
            url,
            data: data
        });
    },
    get(url, data) {
        return service({
            method: 'get',
            url,
            params: data
        });
    }
};
