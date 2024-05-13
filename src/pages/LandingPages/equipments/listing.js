import { Modal, Table, notification } from "antd";
import { useEffect, useState } from "react";
import moment from "moment";
import { equipmentServices } from "../SignIn/services";
import { Button } from "@mui/material";
import EquipmentForm from "./form";

function EquipmentListing() {
  const [equipments, setEquipments] = useState([]);
  const [selectedId, setselectedId] = useState();
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    // Fetch all equipments
    fetchEquipments();
  }, []);

  const fetchEquipments = async () => {
    try {
      const response = await equipmentServices.getAllEquipments();
      setEquipments(response.data);
    } catch (error) {
      console.error("Error fetching equipments:", error);
      // Handle error
    }
  };

  const deleteRecord = (id) => {
    equipmentServices.deleteEquipment({itemID: id}).then((data) =>{ openNotification(data.status === 200); fetchEquipments();});
  }

  const openNotification = (isSuccess) => {
    isSuccess ? api.success({
      message: 'Success fully deleted !',
      description:
        'Equipment Successfully Deleted',
      duration: 5,
    }) : api.error({
        message: 'Failed !',
        description:
          'Equipment Deleting failed',
        duration: 5,
      }) ;
  };

  const columns = [
    {
      title: "Item ID",
      dataIndex: "itemID",
      key: "itemID",
    },
    {
      title: "Item Name",
      dataIndex: "itemName",
      key: "itemName",
    },
    {
      title: "Quantity",
      dataIndex: "qty",
      key: "qty",
    },
    {
      title: "Purchase Date",
      dataIndex: "purchaseDate",
      key: "purchaseDate",
      render: (text) => moment(text).format("YYYY-MM-DD"), // Format purchaseDate using Moment.js to show only the date
    },
    {
      title: "Last Service Date",
      dataIndex: "lastServiceDate",
      key: "lastServiceDate",
      render: (text) => moment(text).format("YYYY-MM-DD"), // Format lastServiceDate using Moment.js to show only the date
    },
    {
      title: "Actions",
      key: "usertype",
      render: (text, record) => {
        return (
          <>
          {contextHolder}
            <div style={{ display: "flex", gap: "5px" }}>
              <Button
                variant="contained"
                color="info"
                onClick={() => {
                  setselectedId(record.itemID);
                }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{marginLeft: '5 px', color: 'white',}}
                onClick={() => {
                  deleteRecord(record.itemID);
                }}
              >
                Delete
              </Button>
            </div>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Table dataSource={equipments} columns={columns} />
      {selectedId && (
        <Modal
          title="Basic Modal"
          open={selectedId > 0}
          footer={null}
          onCancel={() => {
            setselectedId(null);
          }}
        >
          <EquipmentForm
            equipmentId={selectedId}
            closeForm={() => {
              setselectedId(null);
              fetchEquipments();
            }}
          />
        </Modal>
      )}
    </>
  );
}

export default EquipmentListing;
