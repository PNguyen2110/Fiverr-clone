import {
  FileOutlined,
  UserOutlined,
  BookOutlined,
  WechatOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Empty } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelectorAuth } from "../../../storeToolKit/Auth/useSelectorAuth";
import { Header } from "../../Molecules";
const { Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("User Management", "user", <UserOutlined />),
  getItem("Workflow Management", "workFlow", <BookOutlined />),
  getItem("Job type Management", "jobType", <BookOutlined />),
  getItem("Job Detail Management", "jobDetailManagement", <BookOutlined />),
  getItem(
    "Service Management",
    "serviceManagement",
    <CustomerServiceOutlined />
  ),
  getItem("Comment Manager", "commentManager", <WechatOutlined />),
];
const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { userInfo } = useSelectorAuth();
  // check Role
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userLogin"));
    console.log("user", user);
    if (user && user.role !== "ADMIN") {
      navigate("/home");
    } 
  }, [userInfo]);
  
  const [windowWidth, setWindowWidth] = useState(0);

  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  const renderInfo = () => {
    if (windowWidth < 1280) {
      return (
        <Empty
          description={
            <p className="text-blue-400 text-xl">
              This function is not supported on small screen size yet !!
            </p>
          }
        />
      );
    }
    return <Outlet />;
  };
  return (
    <>
      <Header />
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div
            className="logo"
            style={{
              height: "32px",
              margin: "16px",
            }}
          >
            <h1
              style={{ cursor: "pointer" }}
              className="text-blue-400 text-[100%] lg:text-[150%] text-center"
              onClick={() => navigate("/admin")}
            >
              Fiverr
            </h1>
          </div>
          <Menu
            onClick={(item) => {
              console.log(item.key);
              if (item.key === "user") {
                navigate("/admin/userManagement");
              } else if (item.key === "workFlow") {
                navigate("/admin/workFlow");
              } else if (item.key === "jobType") {
                navigate("/admin/jobType");
              } else if (item.key === "jobDetailManagement") {
                navigate("/admin/jobDetailManagement");
              } else if (item.key === "serviceManagement") {
                navigate("/admin/serviceManagement");
              } else if (item.key === "commentManager") {
                navigate("/admin/commentManager");
              }
            }}
            theme="dark"
            // defaultSelectedKeys={["user"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          {/* <Header
            className="site-layout-background"
            style={{ padding: 0, background: "#fff" }}
          /> */}
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360, background: "#fff" }}
            >
              {/* <Outlet /> */}
              {renderInfo()}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
export default AdminTemplate;
