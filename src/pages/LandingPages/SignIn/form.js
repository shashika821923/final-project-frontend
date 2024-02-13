import { Link } from "react-router-dom";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userInfoService } from "./services";

import { notification } from "antd";
import PropTypes from 'prop-types';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    address: Yup.string().required("Address is required"),
    contactNo: Yup.string().required("Contact no. is required"),
    weight: Yup.number().required("Weight is required"),
    height: Yup.number().required("Height is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(5).required("Password is required"),
  });
  

function SigningForm({ userID }) {

    const [api, contextHolder] = notification.useNotification();
  
    useEffect(() => {
      userID > 0 && userInfoService.getUser({ userID }).then((user) => formik.setValues({
        ...formik.values,
        firstName: user.data.firstName || "",
        lastName: user.data.lastName || "",
        address: user.data.address || "",
        contactNo: user.data.contactNo || "",
        weight: user.data.weight || "",
        height: user.data.height || "",
        email: user.data.email || "",
        password: user.data.password || "",
        userId: userID
      }));
  
    }, [userID]);
  
    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        address: "",
        contactNo: "",
        weight: "",
        height: "",
        email: "",
        password: "",
        userId: ""
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        ((userID > 0) ? userInfoService.updateUSer(values) : userInfoService.addNewUserAccount(values)).then((data) => { openNotification(); });
      },
    });
  
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
        <form onSubmit={formik.handleSubmit}>
          <MKBox mb={2}>
            <MKInput
              type="text"
              label="First name"
              fullWidth
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </MKBox>
          <MKBox mb={2}>
            <MKInput
              type="text"
              label="Last name"
              fullWidth
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </MKBox>
          <MKBox mb={2}>
            <MKInput
              type="text"
              label="Address"
              fullWidth
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </MKBox>
          <MKBox mb={2}>
            <MKInput
              type="text"
              label="Contact no."
              fullWidth
              name="contactNo"
              value={formik.values.contactNo}
              onChange={formik.handleChange}
              error={formik.touched.contactNo && Boolean(formik.errors.contactNo)}
              helperText={formik.touched.contactNo && formik.errors.contactNo}
            />
          </MKBox>
          <MKBox mb={2}>
            <MKInput
              type="text"
              label="Weight in KG"
              fullWidth
              name="weight"
              value={formik.values.weight}
              onChange={formik.handleChange}
              error={formik.touched.weight && Boolean(formik.errors.weight)}
              helperText={formik.touched.weight && formik.errors.weight}
            />
          </MKBox>
          <MKBox mb={2}>
            <MKInput
              type="text"
              label="Height in CM"
              fullWidth
              name="height"
              value={formik.values.height}
              onChange={formik.handleChange}
              error={formik.touched.height && Boolean(formik.errors.height)}
              helperText={formik.touched.height && formik.errors.height}
            />
          </MKBox>
          <MKBox mb={2}>
            <MKInput
              type="email"
              label="Email"
              fullWidth
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </MKBox>
          {!(userID > 0) && <MKBox mb={2}>
            <MKInput
              type="password"
              label="Password"
              fullWidth
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </MKBox>}
          <MKBox mt={4} mb={1}>
            <MKButton type="submit" variant="gradient" color="info" fullWidth>
             {(userID > 0) ? 'Update' : 'Sign Up'}
            </MKButton>
          </MKBox>
          <MKBox mt={3} mb={1} textAlign="center">
            {(userID > 0) && <MKTypography variant="button" color="text">
              Don&apos;t have an account?{" "}
              <MKTypography
                component={Link}
                to="/pages/authentication/log-in"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
              >
                Sign In
              </MKTypography>
            </MKTypography>}
          </MKBox>
        </form>
      </>
  
    )
  }
  
  SigningForm.propTypes = {
    userID: PropTypes.number
  };
  
  export default SigningForm;
  