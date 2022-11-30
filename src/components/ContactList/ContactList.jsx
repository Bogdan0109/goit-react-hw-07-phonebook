import './ContactList.scss';
import {
  useDeleteContactsMutation,
  useGetContactsQuery,
} from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
import { selectFilters } from 'redux/selectors';

export const ContactList = () => {
  const filter = useSelector(selectFilters);
  const { data: contacts } = useGetContactsQuery();
  const [deleteContacts, { isLoading }] = useDeleteContactsMutation();

  if (!contacts) return;

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul className="ContactList">
        {filteredContacts.map(({ id, name, phone }) => (
          <li key={id} className="ContactList__item">
            <p className="ContactList__text">{name}:</p>
            <span className="ContactList__span">{phone}</span>
            <button
              type="button"
              className="ContactList__btn"
              onClick={() => deleteContacts(id)}
              disabled={isLoading}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
