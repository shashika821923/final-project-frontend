import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { notification } from "antd";
import PropTypes from 'prop-types';
import { appointmentServices } from "../SignIn/services";
import { decodeToken } from "configs/jwtTokenImplementations";
import { getToken } from "configs/jwtTokenImplementations";
import moment from "moment";

const validationSchema = Yup.object().shape({
  date: Yup.date().required("Date is required"),
  time: Yup.string().required("Time is required"),
});

function AppointmentForm({ appointmentId, closeForm }) {
  const [api, contextHolder] = notification.useNotification();
  const token = getToken()
  
  useEffect(() => {
    if (appointmentId > 0) {
      appointmentServices.getAppointment({ appointmentId }).then((appointment) => {
        ;
        const { date, time } = appointment.data[0];
        const formattedDate = moment(date).format('YYYY-MM-DD');
        formik.setValues({
          ...formik.values,
          date: formattedDate,
          time: time.split('T')[1].split('.')[0],
        });
      });
    }
  }, [appointmentId]);
  
  
  const formik = useFormik({
    initialValues: {
      userId: decodeToken(token).userId,
      date: "",
      time: "",
      appointmentId: appointmentId
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      ((appointmentId > 0) ? appointmentServices.updateAppointment(values) : appointmentServices.addNewAppointment(values)).then((data) => { openNotification(); closeForm && closeForm();});
    },
  });

  const openNotification = () => {
    api.success({
      message: appointmentId ? 'Successfully Updated'  : 'Success fully added !',
      description: appointmentId ? 'Successfully appointment updated' :  'Your appointment is successfully created!',
      duration: 0,
    });
  };
  
  return (
    <>
      {contextHolder}
      <form onSubmit={formik.handleSubmit}>
        <MKBox mb={2}>
          <MKInput
            type="date"
            label="Date"
            fullWidth
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
          />
        </MKBox>
        <MKBox mb={2}>
          <MKInput
            type="time"
            label="Time"
            fullWidth
            name="time"
            value={formik.values.time}
            onChange={formik.handleChange}
            error={formik.touched.time && Boolean(formik.errors.time)}
            helperText={formik.touched.time && formik.errors.time}
          />
        </MKBox>
        <MKBox mt={4} mb={1}>
          <MKButton type="submit" variant="gradient" color="info" fullWidth>
           {(appointmentId > 0) ? 'Update' : 'Add Appointment'}
          </MKButton>
        </MKBox>
      </form>
    </>
  )
}

AppointmentForm.propTypes = {
  appointmentId: PropTypes.number,
  closeForm: PropTypes.func
};

export default AppointmentForm;
