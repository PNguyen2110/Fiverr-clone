import { Menu } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCongViec } from "../../storeToolKit/CongViec";
import { menuCongViec } from "../../storeToolKit/CongViec";

const SubMenuJobList = () => {
  const { jobsList } = useCongViec();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(menuCongViec());
  }, []);

  return (
    <div className="subcheck" style={{ display: "none" }}>
      <Menu mode="horizontal">
        {jobsList?.map((job) => {
          return (
            <Menu.SubMenu
              key={job.tenLoaiCongViec}
              title={job.tenLoaiCongViec}
              onTitleClick={() => navigate(`/categories/${job.id}`)}
            >
              {job.dsNhomChiTietLoai.map((item) => {
                return (
                  <Menu.ItemGroup
                    title={item.tenNhom}
                    key={item.tenNhom}
                    className="font-bold"
                  >
                    {item.dsChiTietLoai.map((data) => {
                      return (
                        <Menu.Item
                          className="font-normal"
                          key={Math.floor(Math.random() * 10000) + 1000}
                          onClick={() => navigate(`/jobList/${data.id}`)}
                        >
                          {data.tenChiTiet}
                        </Menu.Item>
                      );
                    })}
                  </Menu.ItemGroup>
                );
              })}
            </Menu.SubMenu>
          );
        })}
      </Menu>
    </div>
  );
};
export default SubMenuJobList;
