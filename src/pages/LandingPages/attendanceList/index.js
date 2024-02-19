import { Table } from "antd";
import { useEffect, useState } from "react";
import axios from 'axios'; // Import Axios for making HTTP requests
import { attendanceServices } from "../SignIn/services";
import moment from "moment";

function AttendanceListing() {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  const fetchAttendanceData = async () => {
        attendanceServices.getFilteredAttendancesList().then((data) =>  setAttendanceData(data.data)) ; // Replace '/api/attendance' with your actual API endpoint
  };

  const columns = [
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: 'userId',
    },
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
      key: 'firstName',
      render: (text, record) => {
        return (<>
            {record.firstName + ' ' + record.secondName}
        </>)
    },
    }
  ];

  return (
    <Table dataSource={attendanceData} columns={columns} />
  );
}

export default AttendanceListing;
