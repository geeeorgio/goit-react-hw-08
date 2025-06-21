import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { contactsFormSchema } from "../../helpers/yupValidation";
import { addContacts } from "../../redux/contacts/operations";
import s from "./ContactsForm.module.css";
import Button from "../Button/Button";

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
          <Field className={s.input} id="name" name="name" />
          <ErrorMessage className={s.error} name="name" component="div" />

          <label className={s.label} htmlFor="number">
            Number
          </label>
          <Field className={s.input} id="number" name="number" />
          <ErrorMessage className={s.error} name="number" component="div" />

          <Button type="submit" className={s.button}>
            Add contact
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
