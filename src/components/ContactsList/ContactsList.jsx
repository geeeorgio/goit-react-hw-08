import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import Contact from "../Contact/Contact";
import Container from "../Container/Container";
import NoContacts from "../NoContacts/NoContacts";

import s from "./ContactsList.module.css";

const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <Container>
      <Grid className={s.list}>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <GridItem className={s.item} key={contact.id}>
              <Contact contact={contact} />
            </GridItem>
          ))
        ) : (
          <GridItem className={s.item}>
            <NoContacts />
          </GridItem>
        )}
      </Grid>
    </Container>
  );
};

export default ContactsList;
