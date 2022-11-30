import { Wrapper } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { Loader } from './Loader/Loader';

export function App() {
  const { isLoading } = useGetContactsQuery();

  return (
    <Wrapper className="Reviews">
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>

      <Section title={'Contacts'}>
        <Filter />
        {isLoading && <Loader />}
        <ContactList />
      </Section>
    </Wrapper>
  );
}
