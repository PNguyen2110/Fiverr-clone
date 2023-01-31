import { api } from "../constants/api";

export const NguoiDungServices = {
  getInfoUser: (id) => {
    return api.get(`users/${id}`);
  },
  editInfoUser: (data) => {
    if (data) {
      return api.put(`users/${data.id}`, data);
    }
  },
  getUserList: (id) => {
    if (!id.trim()) {
      return api.get(`users`);
    }
    return api.get(`users/${id}`);
  },
  putUser: (data) => {
    return api.put(`users/${data.id}`, data);
  },
  deleteUser: (id) => {
    return api.delete(`users?id=${id}`);
  },
  searchUser: (id) => {
    return api.get(`users/search/${id}`);
  },
  postUser: (data) => {
    return api.post(`users`, data);
  },
};
