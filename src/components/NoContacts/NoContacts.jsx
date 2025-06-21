import s from "./NoContacts.module.css";

const NoContacts = () => {
  return (
    <div className={s.noContacts}>
      <p className={s.title}>No contacts found...</p>
      <p className={s.description}>Please add a contact to get started.</p>
    </div>
  );
};

export default NoContacts;
