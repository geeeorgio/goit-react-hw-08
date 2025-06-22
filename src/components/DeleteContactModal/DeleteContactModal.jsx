import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { deleteContacts } from "../../redux/contacts/operations";
import { selectContactId } from "../../redux/contacts/selectors";
import { setContactId, setIsOpenModal } from "../../redux/contacts/slice";
import Button from "../Button/Button";

import s from "./DeleteContactModal.module.css";

const DeleteContactModal = () => {
  const dispatch = useDispatch();

  const contactId = useSelector(selectContactId);

  const handleDelete = () => {
    dispatch(deleteContacts(contactId))
      .unwrap()
      .then(() => {
        dispatch(setIsOpenModal(false));
        dispatch(setContactId(null));
        toast.success("Contact deleted!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleCloseModal = () => {
    dispatch(setIsOpenModal(false));
    dispatch(setContactId(null));
  };

  return (
    <div className={s.wrapper}>
      <p className={s.text}>Are you sure you want to delete this contact?</p>
      <Button type="button" className={s.button} onClick={handleDelete}>
        Delete
      </Button>
      <Button
        type="button"
        className={s.closeModalBtn}
        onClick={handleCloseModal}
      >
        Close
      </Button>
    </div>
  );
};

export default DeleteContactModal;
