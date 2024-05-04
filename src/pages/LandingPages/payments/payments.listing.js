import { Table } from "antd";
import { useEffect, useState } from "react";
import moment from "moment";
import { payments } from "../SignIn/services";

function PaymentListing({ userId }) {
  const [paymenting, setPayments] = useState([]);

  useEffect(() => {
    // Fetch payments for the specified userId
    fetchPayments();
  }, [userId]); // Re-fetch payments when userId changes

  const fetchPayments = async () => {
    try {
      const response = await payments.getPaymentsByUserId({userId}); 
      setPayments(response.data); 
    } catch (error) {
      console.error("Error fetching payments:", error);
      // Handle error
    }
  };

  const columns = [
    {
      title: "Payment ID",
      dataIndex: "paymentId",
      key: "paymentId",
    },
    // {
    //   title: "User ID",
    //   dataIndex: "userId",
    //   key: "userId",
    // },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Month",
      dataIndex: "month",
      key: "month",
    },
    {
      title: "Payment Date",
      dataIndex: "paymentDate",
      key: "paymentDate",
      render: (text) => moment(text).format("YYYY-MM-DD HH:mm:ss"), // Format paymentDate using Moment.js
    },
    {
      title: "Accepted By",
      dataIndex: "fullName",
      key: "acceptedBy",
    },
  ];

  return (
    <Table dataSource={paymenting} columns={columns} />
  );
}

export default PaymentListing;
