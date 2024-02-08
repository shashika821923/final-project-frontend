import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Box, Grid } from "@mui/material";
import { Menu, Table } from "antd";
import Container from "assets/theme/components/container";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";


function UserListing() {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
      getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    {
      type: 'divider',
    },
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
    getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
  ];

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.Lords-Gym.com/",
          label: "Sign in",
          color: "info",
        }}
        transparent
        light
      />
      <Box
        position="relative"
        zIndex={1}
        sx={{
          overflow: 'hidden', // Ensure no overflow of child elements
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh", // Ensure the background takes full height of the viewport
        }}
      >
        <Box
          py={10}
          height="100%"
          position="relative"
          zIndex={2}
          sx={{
            overflowY: 'auto', // Add scrollbar for vertical overflow
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}  md={4} lg={2}>
              <Menu
                onClick={onClick}
                style={{
                  width: '100%', // Adjusted width for responsiveness
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
              />
            </Grid>
            <Grid item xs={12} pr={4} md={8} lg={10}>
              <Table dataSource={dataSource} columns={columns} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default UserListing;
