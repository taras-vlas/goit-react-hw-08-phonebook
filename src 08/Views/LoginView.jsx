// import React, { useState, useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { authSelectors, authOperations } from '../../redux/auth';

// import PropTypes from 'prop-types';
// // import { useDispatch } from 'react-redux';
// // import { logIn } from '../redux/auth/authOperations';

// // import Button from '../components/UI/Button';
// import style from '../styles/AuthForm.module.css';
// //import Section from '../components/UI/Section';




import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from '../redux/auth';

//import Title from '../components/Title';
import LoginForm from '../components/ContactForm/LoginForm';
import Loader from '../components/Loader';


export default function LoginPage() {
  const isLoading = useSelector(authSelectors.getLoading); // Селектор статуса загрузки

  // Сетит title страницы при маунте компонента
  useEffect(() => {
    document.title = 'Log in to App | Phonebook';
  }, []);

  return (
    <main>
   
      <LoginForm />

      {isLoading && <Loader />}

    </main>
  );
}