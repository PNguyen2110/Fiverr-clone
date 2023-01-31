import { api } from "../constants/api";

export const thueCongViecServices = {
  thueCongViecPost: (data) => {
    return api.post(`thue-cong-viec`, data);
  },
  getRentList: () => {
    return api.get(`thue-cong-viec/lay-danh-sach-da-thue`);
  },
  deleteRentList: (data) => {
    return api.delete(`thue-cong-viec/${data}`);
  },
  getServices: (id) => {
    if (!id.trim()) {
      return api.get(`thue-cong-viec`);
    }
    return api.get(`thue-cong-viec/${id}`);
  },
};
