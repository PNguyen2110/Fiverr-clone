import { api } from "../constants/api";

export const congViecServices = {
  menuCongViec: () => {
    return api.get(`cong-viec/lay-menu-loai-cong-viec`);
  },
  congViecPhanTrangTimKiem: (data) => {
    return api.get(`cong-viec/phan-trang-tim-kiem?pageIndex=${data.number}&pageSize=12&keyword=${data.name}`);
  },
  layCongViecChiTiet: (id) => {
    return api.get(`cong-viec/lay-cong-viec-chi-tiet/${id}`);
  },
  getTypeWork: (key) => {
    return api.get(`cong-viec/lay-chi-tiet-loai-cong-viec/${key}`);
  },
  getTypeWorkDetail: (type) => {
    return api.get(`cong-viec/lay-cong-viec-theo-chi-tiet-loai/${type}`);
  },
  getTypeWorkDetail1: (type) => {
    return api.get(`cong-viec/lay-cong-viec-theo-chi-tiet-loai/${type}`);
  },
  getWork: () => {
    return api.get(`cong-viec`);
  },
  deleteWork: (id) => {
    return api.delete(`cong-viec/${id}`);
  },
  postWork: (data) => {
    return api.post(`cong-viec`,data);
  },
  editWork: (data) => {
    return api.put(`cong-viec/${data.id}`,data);
  },
  searchWork: (data) => {
    return api.get(`cong-viec/lay-danh-sach-cong-viec-theo-ten/${data}`);
  },
  editImg: (data) => {
    // const imgEdit = JSON.parse(localStorage.getItem("imgEdit"))
    // return api.post(`cong-viec/upload-hinh-cong-viec/${imgEdit.id}`,data);
    return api.post(`cong-viec/upload-hinh-cong-viec/${data.id}`,data.formData);
  },
};
