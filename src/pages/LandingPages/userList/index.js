import { Button } from "@mui/material";
import { Modal, Table, notification } from "antd";
import { useEffect, useState } from "react";
import { userInfoService } from "../SignIn/services";
import { decodeToken } from "configs/jwtTokenImplementations";
import SigningForm from "../SignIn/form";
import { UserType } from "configs/enums/userTypes";
import { userTypes } from "configs/enums/userTypes";
import PaymentsForm from "../payments/payments.form";
import PaymentListing from "../payments/payments.listing";

function UserListing() {
  const [userDetails, setUserDetails] = useState([]);
  const [userType, setUserType] = useState(0);
  const [isModalOpen, setIsModelOpen] = useState(false);
  const [selectedUser, setSelecteduser] = useState(0);
  const [api, contextHolder] = notification.useNotification();
  const [isPaymentModelOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isPaymentHistorModalOpen, setIsPaymentHistoryModalOpen] = useState(null);

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
      key: 'usertype',
      render: (text, record) => {
        return (<div style={{display:'flex',gap:'5px'}}>
          <span>{userTypes.find(x => x.typeId === record.usertype).name}</span>
        </div>
      )
    }
    },
  ];

  if (userType === UserType.ADMIN) {
    columns.push({
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <div style={{display:'flex',gap:'5px'}}>
          <Button variant="contained" color="primary" onClick={() => handleEdit(record)}>Edit</Button>
          <Button variant="contained" color="primary" style={{marginLeft: '5 px'}} onClick={() => handelAddPayment(record.userId)}>Add a payment</Button>
          <Button variant="contained" color="primary" style={{marginLeft: '5 px'}} onClick={() => handelPaymentHistory(record.userId)}>View payments</Button>
          <Button variant="contained" color="error" style={{marginLeft: '5 px'}} onClick={() => handleDelete(record.userId)}>Delete</Button>
        </div>
      ),
    });
  }

  const handleEdit = (record) => {
    setSelecteduser(record);
    setIsModelOpen(true);
  };

  const fetchUserInfo = (record) => {
    userInfoService.getAllUsers().then((userList) => setUserDetails(userList.data));
  };

  const handleDelete = (userId) => {
    userInfoService.deleteUser({userID: userId}).then(() => {fetchUserInfo(); openNotification(); })
    console.log("Delete user with ID:", userId);
  };

  const handelAddPayment = (userId) => {
    setSelectedUserId(userId);
    setIsPaymentModalOpen(true);
  }

  const handelPaymentHistory = (userId) => {
    setSelectedUserId(userId);
    setIsPaymentHistoryModalOpen(true);
  }


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
      {isPaymentModelOpen && selectedUserId && <Modal title="Basic Modal" open={isPaymentModelOpen} footer={null} onCancel={() => { setIsPaymentModalOpen(false); }}>
        <PaymentsForm closeForm={selectedUser.userId} userId={selectedUserId} />
      </Modal>}

      {isPaymentHistorModalOpen && selectedUserId && <Modal title="Basic Modal" open={isPaymentHistorModalOpen} footer={null} onCancel={() => { setIsPaymentHistoryModalOpen(false); }}>
        <PaymentListing  userId={selectedUserId} />
      </Modal>}
    </>
  );
}

export default UserListing;
