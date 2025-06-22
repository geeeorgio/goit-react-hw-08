import { Formik, Form, Field, ErrorMessage } from "formik";
import { LuPhone, LuUserRound, LuUserRoundPlus } from "react-icons/lu";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { contactsFormSchema } from "../../helpers/yupValidation";
import { addContacts } from "../../redux/contacts/operations";
import Button from "../Button/Button";

import s from "./ContactsForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={contactsFormSchema}
        onSubmit={(values, actions) => {
          dispatch(addContacts(values))
            .unwrap()
            .then(() => {
              toast.success("Contact added!");
            })
            .catch((error) => {
              toast.error(error.message);
            });
          actions.resetForm();
        }}
      >
        <Form className={s.form}>
          <label className={s.label} htmlFor="name">
            Name
          </label>
          <div className={s.inputWrapper}>
            <LuUserRound className={s.icon} />
            <Field
              className={s.input}
              placeholder="contact name"
              id="name"
              name="name"
            />
          </div>
          <ErrorMessage className={s.error} name="name" component="div" />

          <label className={s.label} htmlFor="number">
            Number
          </label>
          <div className={s.inputWrapper}>
            <LuPhone className={s.icon} />
            <Field
              className={s.input}
              placeholder="000-000-0000"
              id="number"
              name="number"
            />
          </div>
          <ErrorMessage className={s.error} name="number" component="div" />

          <Button type="submit" className={s.button}>
            <LuUserRoundPlus /> Add contact
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
