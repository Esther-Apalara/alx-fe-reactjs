// src/components/formikForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string().trim().required("Username required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().min(6, "At least 6 characters").required("Password required")
});

export default function FormikForm() {
  return (
    <div style={{ maxWidth: 420, margin: "20px auto", padding: 12 }}>
      <h2>Registration (Formik)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log("Formik submit:", values);
            setSubmitting(false);
            resetForm();
            alert("Registration simulated (Formik). Check console.");
          }, 500);
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <div style={{ marginBottom: 8 }}>
              <label>Username</label><br />
              <Field name="username" />
              <div style={{ color: "red" }}><ErrorMessage name="username" /></div>
            </div>

            <div style={{ marginBottom: 8 }}>
              <label>Email</label><br />
              <Field name="email" type="email" />
              <div style={{ color: "red" }}><ErrorMessage name="email" /></div>
            </div>

            <div style={{ marginBottom: 8 }}>
              <label>Password</label><br />
              <Field name="password" type="password" />
              <div style={{ color: "red" }}><ErrorMessage name="password" /></div>
            </div>

            <button type="submit" disabled={isSubmitting}>
              Register (Formik)
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}