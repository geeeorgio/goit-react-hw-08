import { User, Phone } from "lucide-react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { deleteContacts } from "../../redux/contacts/operations";
import Button from "../Button/Button";
import s from "./Contact.module.css";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContacts(id))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
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
      <Button type="button" className={s.button} onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default Contact;
