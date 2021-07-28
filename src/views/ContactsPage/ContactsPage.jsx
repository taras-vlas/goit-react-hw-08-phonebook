import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//                                                            import Alert from '@material-ui/lab/Alert';

import HookForm from '../../components/HookForm';
import Filter from '../../components/Filter';
import ContactsList from '../../components/ContactsList';
import Loader from '../../components/Loader';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

// Компонент сторінки контактів
const ContactsPage = () => {
  const isLoadingContacts = useSelector(state =>
    contactsSelectors.getLoading(state),
  );
  //                                                          const isError = useSelector(state => contactsSelectors.getError(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <HookForm />

      <Filter />

      <ContactsList />

      {isLoadingContacts && <Loader />}

      {/*                                                     {isError && <Alert severity="error">{isError}</Alert>} */}
    </>
  );
};

export default ContactsPage;
