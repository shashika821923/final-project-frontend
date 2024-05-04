import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { notification } from "antd";
import PropTypes from "prop-types";
import { decodeToken } from "configs/jwtTokenImplementations";
import { getToken } from "configs/jwtTokenImplementations";
import { payments, userInfoService } from "../SignIn/services";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import moment from "moment";
import MKButton from "components/MKButton";

const validationSchema = Yup.object().shape({
    month: Yup.number().required("Month is required"),
    year: Yup.number().required("Year is required"),
});

function PaymentsForm({userId, closeForm}) {
  const [api, contextHolder] = notification.useNotification();
  const token = getToken();

  const formik = useFormik({
    initialValues: {
      userId: userId,
      month: moment().month(),
      year: moment().year(),
      acceptedBy: decodeToken(token).userId
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        payments.addNewPayments(values).then((msg) => {openNotification(msg.data); closeForm();})
      },
      
  });

  const openNotification = (msg) => {
    api.success({
      message: 'Successfully Saved',
      description: msg ,
      duration: 0,
    });
  };

  return (
    <>
      {contextHolder}
      <form onSubmit={formik.handleSubmit}>
        <MKBox mb={2}>
          <MKInput
            type="number" // Changed type to "number" for numeric input
            label="Year"
            fullWidth
            name="year"
            value={formik.values.year}
            onChange={formik.handleChange}
            error={formik.touched.year && Boolean(formik.errors.year)}
            helperText={formik.touched.year && formik.errors.year}
          />
        </MKBox>
        <MKBox mb={2}>
          <MKInput
            type="number" // Changed type to "number" for numeric input
            label="Month"
            fullWidth
            name="month"
            value={formik.values.month}
            onChange={formik.handleChange}
            error={formik.touched.month && Boolean(formik.errors.month)}
            helperText={formik.touched.month && formik.errors.month}
          />
        </MKBox>
        <MKBox mt={4} mb={1}>
          <MKButton type="submit" variant="gradient" color="info" fullWidth>
           Save Payment
          </MKButton>
        </MKBox>
      </form>
    </>
  );
}

PaymentsForm.propTypes = {
  userId: PropTypes.number,
  closeForm: PropTypes.func,
};

export default PaymentsForm;
