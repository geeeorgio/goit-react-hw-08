import { useDispatch } from "react-redux";
import { User, Phone } from "lucide-react";
import { LuUserRoundPen, LuUserRoundX } from "react-icons/lu";
import {
  setContactId,
  setIsEdit,
  setIsOpenModal,
} from "../../redux/contacts/slice";
import Button from "../Button/Button";

import s from "./Contact.module.css";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(setIsOpenModal(true));
    dispatch(setContactId(id));
  };

  const handleEdit = () => {
    dispatch(setIsEdit(true));
    dispatch(setContactId(id));
  };

  return (
    <div className={s.info}>
      <p className={s.text}>
        <User size={18} />
        {name}
      </p>
      <p className={s.text}>
        <Phone size={18} />
        {number}
      </p>
      <div className={s.buttonContainer}>
        <Button type="button" className={s.deleteBtn} onClick={handleDelete}>
          <LuUserRoundX /> Delete
        </Button>
        <Button type="button" className={s.editBtn} onClick={handleEdit}>
          <LuUserRoundPen /> Edit
        </Button>
      </div>
    </div>
  );
};

export default Contact;
