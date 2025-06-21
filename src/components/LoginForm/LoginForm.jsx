import { useDispatch } from "react-redux";
import { Field, Form, Formik, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import { LogIn } from "lucide-react";
import { loginSchema } from "../../helpers/yupValidation";
import { userLogin } from "../../redux/auth/operations";
import Button from "../Button/Button";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(userLogin(values)).unwrap();
      actions.resetForm();
      toast.success(`Welcome back! We've missed you!`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <h2 className={s.title}>Log in</h2>

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
            Log in
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
