import { useSelector } from "react-redux";
import {
  selectIsEdit,
  selectIsOpenModal,
} from "../../redux/contacts/selectors";
import DeleteContactModal from "../DeleteContactModal/DeleteContactModal";
import EditContactForm from "../EditContactForm/EditContactForm";

import s from "./ContactItemModal.module.css";

const ContactItemModal = () => {
  const isEdit = useSelector(selectIsEdit);
  const isOpenModal = useSelector(selectIsOpenModal);

  return (
    <div className={s.backdrop}>
      <div className={s.modal}>
        {isEdit && <EditContactForm />}
        {isOpenModal && <DeleteContactModal />}
      </div>
    </div>
  );
};

export default ContactItemModal;
