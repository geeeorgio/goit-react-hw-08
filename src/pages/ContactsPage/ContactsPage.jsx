import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectContactId,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import ContactsForm from "../../components/ContactsForm/ContactsForm";
import Loader from "../../components/Loader/Loader";
import ContactsList from "../../components/ContactsList/ContactsList";
import SearchContactsBox from "../../components/SearchContactsBox/SearchContactsBox";
import ContactItemModal from "../../components/ContactItemModal/ContactItemModal";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contactId = useSelector(selectContactId);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (contactId) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [contactId]);

  return (
    <Section>
      <Container>
        <ContactsForm />
        <SearchContactsBox />
        {isLoading ? <Loader /> : <ContactsList />}
        {contactId && <ContactItemModal />}
      </Container>
    </Section>
  );
};

export default ContactsPage;
