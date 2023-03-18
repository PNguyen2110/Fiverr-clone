import { api } from "../constants/api";
export const chiTietLoaiCongViecServices = {
  jobDetail: (id) => {
    if (!id.trim()) {
      return api.get(`chi-tiet-loai-cong-viec`);
    }
    return api.get(`chi-tiet-loai-cong-viec/${id}`);
  },
  postJobDetail: (data) => {
    return api.post(`chi-tiet-loai-cong-viec`, data);
  },
  putJobDetail: (data) => {
    return api.put(`chi-tiet-loai-cong-viec/${data.id}`, data);
  },
  deleteJobDetail: (id) => {
    return api.delete(`chi-tiet-loai-cong-viec/${id}`);
  },

  postJobTypeDetail: (data) => {
    return api.post(`chi-tiet-loai-cong-viec/them-nhom-chi-tiet-loai`, data);
  },
  putJobTypeDetail: (data) => {
    return api.put(
      `chi-tiet-loai-cong-viec/sua-nhom-chi-tiet-loai/${data.id}`,
      data
    );
  },

  postImage: (data) => {
    return api.post(
      `chi-tiet-loai-cong-viec/upload-hinh-nhom-loai-cong-viec/${data.id}`,
      data.formData
    );
  },
};
