import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading } from "../../redux/contacts/selectors";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import ContactsForm from "../../components/ContactsForm/ContactsForm";
import Loader from "../../components/Loader/Loader";
import ContactsList from "../../components/ContactsList/ContactsList";
import SearchContactsBox from "../../components/SearchContactsBox/SearchContactsBox";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <ContactsForm />
        <SearchContactsBox />
        {isLoading ? <Loader /> : <ContactsList />}
      </Container>
    </Section>
  );
};

export default ContactsPage;
