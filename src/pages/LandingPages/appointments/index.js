import { Button } from "@mui/material";
import { Modal, notification, Select, Table } from "antd";
import { useEffect, useState } from "react";
import { decodeToken } from "configs/jwtTokenImplementations";
import { UserType } from "configs/enums/userTypes";
import AppointmentForm from "../addblog";
import { appointmentServices } from "../SignIn/services";
import moment from "moment";

function AppointmentsListing() {
    const [appointments, setAppointments] = useState([]);
    const [userType, setUserType] = useState(0);
    const [isModalOpen, setIsModelOpen] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [api, contextHolder] = notification.useNotification();
    const [filters, setFilters] = useState({status: '1'});

    useEffect(() => {
        // Decode JWT token and retrieve user type
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = decodeToken(token);
            setUserType(decodedToken.userType);
        }

        // Fetch appointments
        fetchAppointments();
    }, []);

    useEffect(() => {
        fetchAppointments();
    }, [filters]);

    const columns = [
        {
            title: 'Appointment ID',
            dataIndex: 'appointmentId',
            key: 'appointmentId',
        },
        // {
        //   title: 'User ID',
        //   dataIndex: 'userId',
        //   key: 'userId',
        // },
        {
            title: 'Date',
            key: 'date',
            render: (text, record) => (
                <>
                    {moment(record.date).format("MMM Do YY")}
                </>
            ),
        },
        {
            title: 'Time',
            key: 'time',
            render: (text, record) => {
                return (<>
                    {record.time.split('T')[1].split('.')[0]}
                </>)
            },
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
        // {
        //   title: 'Is Deleted',
        //   dataIndex: 'isDeleted',
        //   key: 'isDeleted',
        // },
        {
          title: 'Is Approved',
          key: 'isApproved', render: (text, record) => {
            return (<>
                {record.isApproved ? 'Approved': 'Pending'}
            </>)
        },
        },
        // {
        //   title: 'Is Completed',
        //   dataIndex: 'isCompleted',
        //   key: 'isCompleted',
        // },
    ];

    if (userType === UserType.ADMIN) {
        columns.push({
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <>
                    {!record.isCompleted && !record.isDeleted && <Button variant="contained" color="primary" onClick={() => handleEdit(record)}>Edit</Button>}
                    {!record.isApproved && !record.isCompleted && !record.isDeleted && <Button variant="contained" color="primary" onClick={() => approveAppointment(record.appointmentId)}>Approve</Button>}
                    {record.isApproved && !record.isCompleted && !record.isDeleted &&  <Button variant="contained" color="primary" onClick={() => completeAppointment(record.appointmentId)}>Complete</Button>}
                    {!record.isCompleted && !record.isDeleted && <Button variant="contained" color="error" onClick={() => deleteAppointment(record.appointmentId)}>Delete</Button>}
                </>
            ),
        });
    }

    const handleEdit = (record) => {
        setSelectedAppointment(record);
        setIsModelOpen(true);
    };

    const fetchAppointments = () => {
        appointmentServices.getAllAppointments(filters).then((appointmentList) => setAppointments(appointmentList.data));
    };

    const approveAppointment = (appointmentId) => {
        appointmentServices.approveAppointment({appointmentId}).then(() => { openNotification(); fetchAppointments(); });
    }

    const completeAppointment = (appointmentId) => {
        appointmentServices.completeAppointment({appointmentId}).then(() => { openNotification(); fetchAppointments(); });
    }

    const deleteAppointment = (appointmentId) => {
        appointmentServices.deleteAppointment({appointmentId}).then(() => { openNotification(); fetchAppointments(); });
    }

    const openNotification = () => {
        api.success({
          message: 'Success fully completed !',
          description: 'Your action successfully completed',
          duration: 0,
        });
      };

    return (
        <>
            {contextHolder}
            <Select
                defaultValue="1"
                style={{
                    width: '100%',
                    marginBottom: '10px'
                }}
                onChange={(selected) => setFilters({...filters, ...{status: selected}}) }
                options={[
                    {
                        value: '1',
                        label: 'Approved',
                    },
                    {
                        value: '2',
                        label: 'Pending',
                    },
                    {
                        value: '3',
                        label: 'Completed',
                    },
                    {
                        value: '4',
                        label: 'Deleted',
                    },
                ]}
            />
            {/* Render the table with appointments as dataSource */}
            <Table dataSource={appointments} columns={columns} />

            {selectedAppointment != null && (
                <Modal title="Edit Appointment" visible={isModalOpen} onCancel={() => setIsModelOpen(false)} footer={null}>
                    {/* Render the edit form with selected appointment data */}
                    <AppointmentForm appointmentId={selectedAppointment.appointmentId} />
                </Modal>
            )}
        </>
    );
}

export default AppointmentsListing;
