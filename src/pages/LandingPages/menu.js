import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Box, Grid } from "@mui/material";
import { Menu } from "antd";
import Card from "@mui/material/Card";
import routes from "routes";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { useEffect, useState } from "react";
import UserListing from "./userList";
import NewMembersList from "./userList/newMembers";
import SigningForm from "./SignIn/form";
import AppointmentsListing from "./appointments";
import DefaultNavbarAdmin from "examples/Navbars/DefaultNavbar/adminNavBar";
import "./menu.css";
import AttendanceListing from "./attendanceList";
import CreatePromotionEmail from "./promotionVillas";
import PaymentsForm from "./payments/payments.form";
import MKBox from "components/MKBox";

export default function MenuHome() {
  const [selectedKey, setSelectedKey] = useState(["1"]);
  const [renderComponent, setRenderComponent] = useState();

  useEffect(() => {
    onClick({ key: selectedKey[0] });
  }, []);

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const onClick = (e) => {
    switch (e.key) {
      case "1":
        setSelectedKey(["1"]);
        setRenderComponent(<UserListing />);
        break;
      case "2":
        setSelectedKey(["2"]);
        setRenderComponent(<SigningForm />);
        break;
      case "3":
        setSelectedKey(["3"]);
        setRenderComponent(<NewMembersList />);
        break;
      case "5":
        setSelectedKey(["5"]);
        setRenderComponent(<AppointmentsListing />);
        break;
      case "13":
        setSelectedKey(["13"]);
        setRenderComponent(<AttendanceListing />);
        break;
      case "9":
        setSelectedKey(["13"]);
        setRenderComponent(<CreatePromotionEmail />);
        break;
      case "6":
        setSelectedKey(["6"]);
        setRenderComponent(<PaymentsForm />);
        break;
      default:
        return (window.location.href = "/");
    }
  };

  const items = [
    getItem("Users Management", "sub1", <UserOutlined />, [
      getItem("User Lisitng", "1"),
      getItem("Add new gym member", "2"),
      getItem("New Membership requests", "3"),
    ]),
    getItem("Appointments Two", "sub2", <AppstoreOutlined />, [
      getItem("Appointments listing", "5"),
      getItem("Payments listing", "6"),
      getItem("Comming soon", "sub3", null, [
        getItem("Comming soon", "7"),
        getItem("Comming soon", "8"),
      ]),
    ]),
    {
      type: "divider",
    },
    getItem("Promotions", "sub4", <SettingOutlined />, [
      getItem("Email Promotions", "9"),
      getItem("Comming soon", "10"),
      getItem("Comming soon", "11"),
      getItem("Comming soon", "12"),
    ]),
    getItem(
      "Attendance",
      "grp",
      null,
      [getItem("Attendance List", "13"), getItem("Comming soon", "14")],
      "group"
    ),
  ];

  return (
    <>
      <DefaultNavbarAdmin
        routes={routes}
        className="header-inner"
        action={{
          type: "external",
          route: "https://www.Lords-Gym.com/",
          label: "Sign in",
          color: "info",
        }}
      />
      <Box
        position="relative"
        zIndex={1}
        sx={{
          overflow: "hidden",
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <Box
          py={10}
          height="100%"
          position="relative"
          zIndex={2}
          padding={"unset"}
          sx={{
            overflowY: "auto",
          }}
        >
          <div className="flex-container">
            <div className="side-menu">
              <Menu
                onClick={onClick}
                style={{
                  width: "100%", // Adjusted width for responsiveness
                }}
                defaultSelectedKeys={selectedKey}
                defaultOpenKeys={["sub1", "sub2", "sub3", "sub4"]}
                mode="inline"
                items={items}
              />
            </div>
            <div className="component-container">
              <Card
               
              >
                {" "}
                {renderComponent}
              </Card>
            </div>
          </div>
          {/* <Grid container spacing={3}>
                        <Grid item xs={12} md={4} lg={2}>
                            
                        </Grid>
                        <Grid item xs={12} pr={4} md={8} lg={10}>
                            
                        </Grid>
                    </Grid> */}
        </Box>
      </Box>
    </>
  );
}
