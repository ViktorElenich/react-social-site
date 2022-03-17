import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'cc2de5b0-353c-49f3-8727-1db998062ff3'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const getUsers = async (currentPage = 1, pageSize = 5) => {
    const res = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
    return res.data;
}

export const followUnfollowPost = async (id) => {
    const res = await instance.post(`follow/${id}`);
    return res.data;
}

export const followUnfollowPostDelete = async (id) => {
    const res = await instance.delete(`follow/${id}`);
    return res.data;
}