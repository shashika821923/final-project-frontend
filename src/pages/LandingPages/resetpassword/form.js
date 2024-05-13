import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";
import routes from "routes";
import bgImage from "assets/images/bg-sign-in-basic.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userInfoService } from "../SignIn/services";
import { storeToken } from "configs/jwtTokenImplementations";
import { notification } from "antd";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

function RestPassword() {
  const [api, contextHolder] = notification.useNotification();
  const redirectToPath = (path) => {
    window.location.href = path;
  };

  // Example usage: redirect to '/dashboard' path
  const handleRedirect = () => {
    redirectToPath("/");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      userInfoService.resetPassword(formik.values).then((status) => {
        openNotification(status.data.success);
      });
    },
  });

  const openNotification = (isSuccess) => {
    isSuccess ? api.success({
        message: "Successfull",
        description: "Your Password rest and new password has been sent to your email",
        duration: 0,
      }) :api.error({
      message: "Unsuccessfull",
      description: "Your password reset is unsuccessful",
      duration: 0,
    });
  };

  return (
    <>
      {contextHolder}
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.Lords-Gym.com/",
          label: "Sign in",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox
        px={1}
        width="100%"
        height="100vh"
        mx="auto"
        position="relative"
        zIndex={2}
      >
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography
                  variant="h4"
                  fontWeight="medium"
                  color="white"
                  mt={1}
                >
                  Sign In
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <form onSubmit={formik.handleSubmit}>
                  <MKBox mb={2}>
                    <MKInput
                      type="email"
                      label="Email"
                      fullWidth
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton
                      type="submit"
                      variant="gradient"
                      color="info"
                      fullWidth
                    >
                      Rest Password
                    </MKButton>
                  </MKBox>
                 
                </form>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default RestPassword;
