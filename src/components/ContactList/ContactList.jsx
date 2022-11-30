import './ContactList.scss';
import { deleteContacts, useGetContactsQuery } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filters.filter);
  console.log(
    '🚀 ~ file: ContactList.jsx ~ line 11 ~ ContactList ~ filter',
    filter
  );

  const { data: contacts, error, isLoading } = useGetContactsQuery();

  console.log(
    '🚀 ~ file: ContactList.jsx ~ line 17 ~ ContactList ~ data',
    contacts
  );

  if (!contacts) return;

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(
    '🚀 ~ file: ContactList.jsx ~ line 23 ~ ContactList ~ filteredContacts',
    filteredContacts
  );
  return (
    <ul className="ContactList">
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className="ContactList__item">
          <p className="ContactList__text">{name}:</p>
          <span className="ContactList__span">{number}</span>
          <button
            type="button"
            className="ContactList__btn"
            onClick={() => dispatch(deleteContacts(id))}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};
