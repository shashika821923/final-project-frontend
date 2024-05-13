import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { notification } from "antd";
import PropTypes from 'prop-types';
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import { equipmentServices } from "../SignIn/services";

const validationSchema = Yup.object().shape({
  itemName: Yup.string().required("Item Name is required"),
  qty: Yup.number().required("Quantity is required"),
  purchaseDate: Yup.date().required("Purchase Date is required"),
  lastServiceDate: Yup.date().required("Last Service Date is required"),
});

function EquipmentForm({ equipmentId, closeForm }) {
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (equipmentId > 0) {
      equipmentServices.getEquipment({ equipmentId }).then((equipment) => {
        const { itemName, qty, purchaseDate, lastServiceDate } = equipment.data[0];
        formik.setValues({
          ...formik.values,
          itemName,
          qty,
          purchaseDate: new Date(purchaseDate).toISOString().split('T')[0],
          lastServiceDate: new Date(lastServiceDate).toISOString().split('T')[0],
        });
      });
    }
  }, [equipmentId]);
  
  const formik = useFormik({
    initialValues: {
      itemName: "",
      qty: "",
      purchaseDate: "",
      lastServiceDate: "",
      equipmentId: equipmentId
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      ((equipmentId > 0) ? equipmentServices.updateEquipment(values) : equipmentServices.addNewEquipment(values)).then(() => { openNotification(); closeForm && closeForm();});
    },
  });

  const openNotification = () => {
    api.success({
      message: equipmentId ? 'Successfully Updated'  : 'Success fully added !',
      description: equipmentId ? 'Successfully equipment updated' :  'New equipment is successfully added!',
      duration: 0,
    });
  };
  
  return (
    <>
      {contextHolder}
      <form onSubmit={formik.handleSubmit}>
        <MKBox mb={2}>
          <MKInput
            type="text"
            label="Item Name"
            fullWidth
            name="itemName"
            value={formik.values.itemName}
            onChange={formik.handleChange}
            error={formik.touched.itemName && Boolean(formik.errors.itemName)}
            helperText={formik.touched.itemName && formik.errors.itemName}
          />
        </MKBox>
        <MKBox mb={2}>
          <MKInput
            type="number"
            label="Quantity"
            fullWidth
            name="qty"
            value={formik.values.qty}
            onChange={formik.handleChange}
            error={formik.touched.qty && Boolean(formik.errors.qty)}
            helperText={formik.touched.qty && formik.errors.qty}
          />
        </MKBox>
        <MKBox mb={2}>
          <MKInput
            type="date"
            label="Purchase Date"
            fullWidth
            name="purchaseDate"
            value={formik.values.purchaseDate}
            onChange={formik.handleChange}
            error={formik.touched.purchaseDate && Boolean(formik.errors.purchaseDate)}
            helperText={formik.touched.purchaseDate && formik.errors.purchaseDate}
          />
        </MKBox>
        <MKBox mb={2}>
          <MKInput
            type="date"
            label="Last Service Date"
            fullWidth
            name="lastServiceDate"
            value={formik.values.lastServiceDate}
            onChange={formik.handleChange}
            error={formik.touched.lastServiceDate && Boolean(formik.errors.lastServiceDate)}
            helperText={formik.touched.lastServiceDate && formik.errors.lastServiceDate}
          />
        </MKBox>
        <MKBox mt={4} mb={1}>
          <MKButton type="submit" variant="gradient" color="info" fullWidth>
           {equipmentId > 0 ? 'Update' : 'Add Equipment'}
          </MKButton>
        </MKBox>
      </form>
    </>
  )
}

EquipmentForm.propTypes = {
  equipmentId: PropTypes.number,
  closeForm: PropTypes.func
};

export default EquipmentForm;
