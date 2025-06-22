import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { contactsFormSchema } from "../../helpers/yupValidation";
import { updateContacts } from "../../redux/contacts/operations";
import { selectContactById } from "../../redux/contacts/selectors";
import {
  setContactId,
  setIsEdit,
  setIsOpenModal,
} from "../../redux/contacts/slice";
import Button from "../Button/Button";

import s from "./EditContactForm.module.css";

const EditContactForm = () => {
  const dispatch = useDispatch();
  const contact = useSelector(selectContactById);

  const handleSubmit = (values, actions) => {
    dispatch(updateContacts({ id: contact.id, ...values }))
      .unwrap()
      .then(() => {
        dispatch(setIsOpenModal(false));
        dispatch(setIsEdit(false));
        dispatch(setContactId(null));
        toast.success("Contact updated!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
    actions.resetForm();
  };

  const handleCloseModal = () => {
    dispatch(setIsOpenModal(false));
    dispatch(setIsEdit(false));
    dispatch(setContactId(null));
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={{ name: contact.name, number: contact.number }}
        validationSchema={contactsFormSchema}
        onSubmit={handleSubmit}
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
            Update contact
          </Button>
          <Button
            type="button"
            className={s.closeModalBtn}
            onClick={handleCloseModal}
          >
            Close
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default EditContactForm;
