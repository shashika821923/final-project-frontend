import { AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Box, Grid, Button } from "@mui/material";
import { Menu, Modal, Table, notification } from "antd";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { useEffect, useState } from "react";
import UserListing from "./userList";
import NewMembersList from "./userList/newMembers";
import SigningForm from "./SignIn/form";
import AppointmentsListing from "./appointments";

export default function MenuHome() {
    const [selectedKey, setSelectedKey] = useState(['1']);
    const [renderComponent, setRenderComponent] = useState();

    useEffect(() => {
        onClick({key: selectedKey[0]});
    }, [])

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
            case '1':
                setSelectedKey(['1']);
                setRenderComponent(<UserListing />);
                break
            case '2':
                setSelectedKey(['2']);
                setRenderComponent(<SigningForm />);
                break
            case '3':
                setSelectedKey(['3']);
                setRenderComponent(<NewMembersList />);
                break
            case '5':
                setSelectedKey(['5']);
                setRenderComponent(<AppointmentsListing />);
                break
            default:
                return window.location.href = '/';
        }
    };

    const items = [
        getItem('Users Management', 'sub1', <UserOutlined />, [
            getItem('User Lisitng', '1',),
            getItem('Add new gym member', '2',),
            getItem('New Membership requests', '3',),
        ]),
        getItem('Appointments Two', 'sub2', <AppstoreOutlined />, [
            getItem('Appointments listing', '5'),
            getItem('Payments listing', '6'),
            getItem('Comming soon', 'sub3', null, [getItem('Comming soon', '7'), getItem('Comming soon', '8')]),
        ]),
        {
            type: 'divider',
        },
        getItem('Navigation Three', 'sub4', <SettingOutlined />, [
            getItem('Comming soon', '9'),
            getItem('Comming soon', '10'),
            getItem('Comming soon', '11'),
            getItem('Comming soon', '12'),
        ]),
        getItem('Group', 'grp', null, [getItem('Comming soon', '13'), getItem('Comming soon', '14')], 'group'),
    ];

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
            />
            <Box
                position="relative"
                zIndex={1}
                sx={{
                    overflow: 'hidden',
                    backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
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
                    sx={{
                        overflowY: 'auto',
                    }}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4} lg={2}>
                            <Menu
                                onClick={onClick}
                                style={{
                                    width: '100%', // Adjusted width for responsiveness
                                }}
                                defaultSelectedKeys={selectedKey}
                                defaultOpenKeys={['sub1', 'sub2', 'sub3', 'sub4']}
                                mode="inline"
                                items={items}
                            />
                        </Grid>
                        <Grid item xs={12} pr={4} md={8} lg={10}>
                                {renderComponent}
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </>

    )
}