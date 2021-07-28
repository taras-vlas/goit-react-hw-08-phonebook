import React, { useEffect } from 'react';
//  import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

// import { fetchContacts } from '../redux/contacts';
import { contactsOperations, contactsSelectors } from '../redux/contacts';
 import 'react-toastify/dist/ReactToastify.css';

import AddContactForm from "../components/ContactForm/ContactForm";
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import Loader from '../components/Loader';
//  import style from '../styles/PhoneBook.module.css';

//  import Section from '../components/UI/Section';
//  import FormContact from '../components/FormContact';
 
 //import { getIsLoading } from "../redux/phonebook/phonebook-selectors";
//import CounterContacts from '../components/CounterContacts';

                    //import { useSelector } from "react-redux";
                    import styled from 'styled-components'                     
                    
                    //import ContactList from "../components/ContactList/ContactList";
                    //import Filter from '../components/Filter/Filter';

export default function PhoneBookView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(state =>
    contactsSelectors.getLoading(state),
  );                                                                      // Селектор статуса загрузки из контактов
  const isError = useSelector(state => contactsSelectors.getError(state)); // Селектор статуса ошибки из контактов
  
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    document.title = 'Contacts list | Phonebook';
  }, []);

  return (

                    <>
                        <Section>
                          <h1>Phonebook</h1>
                          <AddContactForm />
                        </Section>
                            
                        <Section>
                          <h2>Contacts</h2>
                      
                          <Filter />
                        
                              {/* {isLoading && <p>Loading...</p>} */}
                              {isLoadingContacts && <Loader />
                                // <Spinner type="TailSpin" color="#00BFFF" height={40} width={40} className="Spinner" timeout={3000} />
                              }
                          <ContactList />
                        </Section>
                      </>        
                    );
    
  //   <div className={style.Page}>
  //     <ToastContainer position="top-right" />
  //     <Section title="Add contact">
  //       <FormContact />
  //       {/* <CounterContacts total={total} /> */}
  //       <Filter />
  //     </Section>
  //     <ContactList />
  //   </div>
  // );
}

                    const Section = styled.section`
                      &:not(:last-of-type) {
                        margin-bottom: 40px;
                      }
                    `;

// class PhoneBookView extends Component {
//   // state = {
//   //   showModal: false,
//   // };
//   componentDidMount() {
//     this.props.fetchContacts();
//   }

//   // toggleModal = () => {
//   //   this.setState(({ showModal }) => ({ showModal: !showModal }));
//   // };

//   render() {
//     return (
//       <div className={style.Page}>
//         <ToastContainer position="top-right" />
//         <Section title="Add new contact">
//           <FormContact />
//           <Filter />
//         </Section>

//         {/* <CSSTransition in timeout={500} classNames={style} unmountOnExit>
//           <Section title="Find contact by name"></Section>
//         </CSSTransition> */}

//         <Section title="Contacts">
//           {this.props.isLoadingContacts && <h1>...is loading</h1>}
//           <ContactList />
//         </Section>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   isLoadingContacts: getIsLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookView);
