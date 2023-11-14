import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  dateOfBirth: Yup.date().required('Date of Birth is required'),
  gender: Yup.string().required('Gender is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  address: Yup.string().required('Address is required'),
  preferredDateAndTime: Yup.string().required('Preferred Date and Time is required'),
  reasonForAppointment: Yup.string().required('Reason for Appointment is required'),
  typeOfAppointment: Yup.string().required('Type of Appointment is required'),
});

const initialValues = {
  fullName: '',
  dateOfBirth: '',
  gender: '',
  phoneNumber: '',
  email: '',
  address: '',
  preferredDateAndTime: '',
  reasonForAppointment: '',
  typeOfAppointment: '',
};

const AppointmentForm = () => {
  const onSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <Field type="text" id="fullName" name="fullName" />
          <ErrorMessage name="fullName" component="div" />
        </div>

        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <Field type="date" id="dateOfBirth" name="dateOfBirth" />
          <ErrorMessage name="dateOfBirth" component="div" />
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
          <Field as="select" id="gender" name="gender">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Field>
          <ErrorMessage name="gender" component="div" />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <Field type="tel" id="phoneNumber" name="phoneNumber" />
          <ErrorMessage name="phoneNumber" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <Field type="text" id="address" name="address" />
          <ErrorMessage name="address" component="div" />
        </div>

        <div>
          <label htmlFor="preferredDateAndTime">Preferred Date and Time:</label>
          <Field type="text" id="preferredDateAndTime" name="preferredDateAndTime" />
          <ErrorMessage name="preferredDateAndTime" component="div" />
        </div>

        <div>
          <label htmlFor="reasonForAppointment">Reason for Appointment:</label>
          <Field as="textarea" id="reasonForAppointment" name="reasonForAppointment" />
          <ErrorMessage name="reasonForAppointment" component="div" />
        </div>

        <div>
          <label htmlFor="typeOfAppointment">Type of Appointment:</label>
          <Field as="select" id="typeOfAppointment" name="typeOfAppointment">
            <option value="">Select Type</option>
            <option value="consultation">Consultation</option>
            <option value="follow-up">Follow-up</option>
            {/* Add more options as needed */}
          </Field>
          <ErrorMessage name="typeOfAppointment" component="div" />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default AppointmentForm;
