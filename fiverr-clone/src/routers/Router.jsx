import { Navigate, useRoutes } from "react-router-dom";
import { JobDetail } from "../pages/JobDetail";
import { JobList } from "../pages/JobList";
import MainLayout from "../components/layouts/MainLayout";
import AdminTemplate from "../components/template/AdminTemplate/AdminTemplate";
import { CommentManager } from "../pages/admin/commentManager/CommentManager";
import { JobDetailManagement } from "../pages/admin/jobDetailManagement/JobDetailManagement";
import JobManagement from "../pages/admin/jobManagement/JobManagement";
import { JobTypeManagement } from "../pages/admin/jobTypeManagement/JobTypeManagement";
import { ServiceManagement } from "../pages/admin/servicesManagement/ServicesManagement";
import AddUser from "../pages/admin/userManagement/AddUser";
import EditUser from "../pages/admin/userManagement/EditUser";
import UserManagement from "../pages/admin/userManagement/UserManagement";
import Categories from "../pages/categories/Categories";
import Home from "../pages/home/Home";
import InfoUser from "../pages/infoUser/InfoUser";
import NotFound from "../pages/notFound/NotFound";

const Router = () => {
  const routing = useRoutes([
    {path: "/",element: <MainLayout />,
      children: [
        { path: "jobList/:jobName", element: <JobList /> },
        { path: "jobDetail/:id", element: <JobDetail /> },
        { path: "", element: <Navigate to="home" /> },
        { path: "home", element: <Home /> },
        { path: "categories/:ids", element: <Categories /> },
        { path: "infoUser/:idUser", element: <InfoUser /> },
        { path: "*", element: <NotFound /> },
      ],
    },
    {path: "/admin",element: <AdminTemplate />,
      children: [
        { path: "", element: <Navigate to="userManagement" /> },
        { path: "userManagement", element: <UserManagement /> },
        { path: "editUser/:id", element: <EditUser /> },
        { path: "addUser", element: <AddUser /> },
        {path: "jobType", element: <JobTypeManagement />},
        { path: "workFlow",element: <JobManagement /> },
        {
          path: "jobDetailManagement",
          element: <JobDetailManagement />,
        },
        {
          path: "commentManager",
          element: <CommentManager />,
        },
        { path: "serviceManagement", element: <ServiceManagement /> },
      ],
    },
  ]);

  return routing;
};

export default Router;
