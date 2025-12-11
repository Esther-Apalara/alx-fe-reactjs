import React from "react";
import { Formik, Form, Field, ErrorMessage } from "@tanstack/react-query"; // fix for React Query v5? wait use Formik
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

export default function FormikForm() {
  return (
    <div>
      <h2>Registration (Formik)</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <Form>
            <Field name="username" placeholder="Username" />
            <ErrorMessage name="username" component="div" />
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}