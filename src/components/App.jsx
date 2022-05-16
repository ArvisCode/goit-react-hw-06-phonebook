import { useSelector } from 'react-redux';
import { Container } from './Container/Container';
import { ContactForm } from './ContactForm/ContactForm';
import { getContacts } from 'redux/contactSlise';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);

  return (
    <>
      <Container title="Phonebook">
        <ContactForm />
      </Container>

      <Container title="Contacts">
        <Filter />
        {contacts.length > 0 ? <ContactList /> : null}
      </Container>
    </>
  );
};
