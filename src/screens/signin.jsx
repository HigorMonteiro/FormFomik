import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function validateEmpty(value, message) {
  return !value ? message : undefined;
}

function validateEmail(value) {
  return validateEmpty(value, "Email is required");
}

function validatePassword(value) {
  return validateEmpty(value, "Password is required");
}

const Schema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
});

export function Signin() {
  return (
    <>
      <h1>Autentication</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 300);
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              validate={validateEmail}
              disabled={isSubmitting}
            />
            {errors.email && <div className="errors">{errors.email}</div>}
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              validate={validatePassword}
              disabled={isSubmitting}
            />
            {errors.password && <div className="errors">{errors.password}</div>}
            <button type="submit">
              {isSubmitting ? "Submitting" : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
