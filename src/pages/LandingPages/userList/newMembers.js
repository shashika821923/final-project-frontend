import { Button } from "@mui/material";
import { Modal, Table, notification } from "antd";
import { useEffect, useState } from "react";
import { userInfoService } from "../SignIn/services";
import { decodeToken } from "configs/jwtTokenImplementations";
import SigningForm from "../SignIn/form";
import { UserType } from "configs/enums/userTypes";

function NewMembersList() {
  const [userDetails, setUserDetails] = useState([]);
  const [userType, setUserType] = useState(0);
  const [isModalOpen, setIsModelOpen] = useState(false);
  const [selectedUser, setSelecteduser] = useState(0);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    // Fetch user details from the server
    fetchUserInfo();
    // Decode JWT token and retrieve user type
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = decodeToken(token);
      setUserType(decodedToken.userType);
    }
  }, []);

  useEffect(() => {
    fetchUserInfo();
  }, [selectedUser]);

  const columns = [
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Second Name',
      dataIndex: 'secondName',
      key: 'secondName',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Contact',
      dataIndex: 'contact',
      key: 'contact',
    },
    {
      title: 'Height',
      dataIndex: 'height',
      key: 'height',
    },
    {
      title: 'Weight',
      dataIndex: 'weight',
      key: 'weight',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    // Avoid rendering password in the table for security reasons
    // {
    //   title: 'Password',
    //   dataIndex: 'password',
    //   key: 'password',
    // },
    {
      title: 'User Type',
      dataIndex: 'usertype',
      key: 'usertype',
    },
  ];

  if (userType === UserType.ADMIN) {
    columns.push({
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <>
          <Button variant="contained" color="primary" onClick={() => handleEdit(record)}>Accept</Button>
          <Button variant="contained" color="error" onClick={() => handleDelete(record.userId)}>Delete</Button>
        </>
      ),
    });
  }

  const handleEdit = (record) => {
    userInfoService.acceptUser({userID: record.userId}).then(() => openNotification())
  };

  const fetchUserInfo = (record) => {
    userInfoService.newMemberShipRequets().then((userList) => setUserDetails(userList.data));
  };

  const handleDelete = (userId) => {
    userInfoService.deleteUser({userID: userId}).then(() => {fetchUserInfo(); openNotification(); })
    console.log("Delete user with ID:", userId);
  };

  const openNotification = () => {
    api.success({
      message: 'Success fully added !',
      description:
        'Your user account is successfully created!',
      duration: 0,
    });
  };

  return (
    <>
      {contextHolder}

      {/* Render the table with userDetails as dataSource */}
      <Table dataSource={userDetails} columns={columns} />

      {selectedUser != null && <Modal title="Basic Modal" open={isModalOpen} footer={null} onCancel={() => { setIsModelOpen(false); setSelecteduser(null) }}>
        <SigningForm userID={selectedUser.userId} />
      </Modal>}
    </>
  );
}

export default NewMembersList;
