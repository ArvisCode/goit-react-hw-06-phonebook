import { useSelector, useDispatch } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { deleteContact, getFilter, getContacts } from 'redux/contactSlise';
import { Item } from './ContactList.styled';

export const ContactList = () => {
  const filterValue = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const deleteSelectedContact = contactID => dispatch(deleteContact(contactID));

  const contactsFilter = () => {
    const filterNormalize = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
  };

  const filtredContacts = contactsFilter();

  return (
    <ul>
      {filtredContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Contact
              name={name}
              number={number}
              onDeleteContact={() => deleteSelectedContact(id)}
              contactID={id}
            />
          </Item>
        );
      })}
    </ul>
  );
};
