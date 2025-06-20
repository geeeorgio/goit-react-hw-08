import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { LogIn } from "lucide-react";
import toast from "react-hot-toast";
import { userRegister } from "../../redux/auth/operations";
import { registrationSchema } from "../../helpers/yupValidation";
import Button from "../Button/Button";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(userRegister({ ...values, id: nanoid() })).unwrap();
      toast.success(`Hello, ${values.name}! You registered successfully!`);
      actions.resetForm();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={registrationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <h2 className={s.title}>Sign up</h2>
          <label htmlFor="name" className={s.label}>
            Name
          </label>
          <Field
            id="name"
            name="name"
            placeholder="your name"
            className={s.input}
          />
          <ErrorMessage className={s.error} name="name" component="div" />

          <label htmlFor="email" className={s.label}>
            Email
          </label>
          <Field
            id="email"
            name="email"
            placeholder="your@email.com"
            type="email"
            className={s.input}
          />
          <ErrorMessage className={s.error} name="email" component="div" />

          <label htmlFor="password" className={s.label}>
            Password
          </label>
          <Field
            id="password"
            name="password"
            placeholder="********"
            className={s.input}
          />
          <ErrorMessage className={s.error} name="password" component="div" />

          <Button type="submit" className={s.button}>
            <LogIn />
            Sign up
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
