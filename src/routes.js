import AboutUs from "layouts/pages/landing-pages/about-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";

import { DashboardOutlined } from "@mui/icons-material";
import LoginForm from "pages/LandingPages/Login";
import AddAppointmentMain from "pages/LandingPages/addblog/formbg";
import MenuHome from "pages/LandingPages/menu";
import { decodeToken } from "configs/jwtTokenImplementations";
import { getToken } from "configs/jwtTokenImplementations";
import { userTypes } from "configs/enums/userTypes";
import { UserType } from "configs/enums/userTypes";
import CreateBlogPostMain from "pages/LandingPages/blogs/formbacking";
import BlogListing from "pages/LandingPages/blogs/blogging-listing";


const routes = [
  {
    name: "pages",
    icon: <DashboardOutlined />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        collapse: [
          {
            name: "About us",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "Trainers",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
          {
            name: "Add new blog post",
            route: "/pages/landing-pages/createBlog",
            component: <CreateBlogPostMain />,
          },
          {
            name: "Sign In",
            route: "/pages/authentication/sign-in",
            component: <SignIn />,
          },
          {
            name: "Log In",
            route: "/pages/authentication/log-in",
            component: <LoginForm />,
          },
        ],
      },
    ],
  },
];

console.log('token', decodeToken(getToken()))

if(decodeToken(getToken()).userType === UserType.USER ){
  routes[0].collapse.push( {
    name: "User accounts",
    collapse: [
      {
        name: "Admin panel",
        route: "/pages/admin/adminPanel",
        component: <MenuHome />,
      },
      {
        name: "Add appointment",
        route: "/pages/appointments/addAppointments",
        component: <AddAppointmentMain />,
      },
    ],
  })
}


if(decodeToken(getToken()) != null){
  routes[0].collapse.push( {
    name: "Blogging ",
    collapse: [
      {
        name: "Add new blog",
        route: "/pages/blog/addNewBlog",
        component: <CreateBlogPostMain />,
      },
      {
        name: "Blog listing",
        route: "/pages/blog/bloggingPost",
        component: <BlogListing />,
      },
    ],
  })
}

export default routes;
