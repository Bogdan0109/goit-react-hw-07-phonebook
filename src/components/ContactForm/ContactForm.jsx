import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from '../../redux/contactsSlice';
import './ContactForm.scss';

export function ContactForm({ onSubmit }) {
  const dispatch = useDispatch();
  const loginInputId = nanoid();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = nanoid();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    )
      return alert(`${name} is alredy in contacts`);

    dispatch(addContacts({ id, name, number }));
    form.reset();
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label htmlFor={loginInputId} className="Form__label">
        Name
        <input
          className="Form__input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={loginInputId} className="Form__label">
        Number
        <input
          className="Form__input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className="Form__btn" type="submit">
        Add contact
      </button>
    </form>
  );
}

// export class ContactForm extends Component {
//   loginInputId = nanoid();

//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     e.preventDefault();

//     const { name, value } = e.target;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return(
//       <form className="Form" onSubmit={this.handleSubmit}>
//         <label htmlFor={this.loginInputId} className="Form__label">
//           Name
//           <input
//             className="Form__input"
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label htmlFor={this.loginInputId} className="Form__label">
//           Number
//           <input
//             className="Form__input"
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={this.state.number}
//             onChange={this.handleChange}
//           />
//         </label>
//         <button className="Form__btn" type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
