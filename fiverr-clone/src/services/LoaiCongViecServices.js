import { api } from "../constants/api";
export const loaiCongViecServices = {
  jobType: (id) => {
    if (!id.trim()) {
      return api.get(`loai-cong-viec`);
    }
    return api.get(`loai-cong-viec/${id}`);
  },
  postJobType: (data) => {
    return api.post(`loai-cong-viec`, data);
  },
  deleteJobType: (id) => {
    return api.delete(`loai-cong-viec/${id}`);
  },
  putJobType: (data) => {
    return api.put(`loai-cong-viec/${data.id}`, data);
  },
};
