import { connect } from 'react-redux'; // Импорт функции коннекта к хранилищу

import { contactsOperations, contactsSelectors } from '../../redux/contacts'; // Импорт операции добавления контакта и селектора всех контактов

import HookForm from './HookFormInput'; // Импорт компонента формы для обёртки в коннекте

// Из глобального стейта в пропы компонента HookForm
const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
  isLoading: contactsSelectors.getLoading(state),
});

// Операции в пропы компонента HookForm
const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HookForm);
