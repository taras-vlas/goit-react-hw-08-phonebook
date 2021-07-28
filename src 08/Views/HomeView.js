import React from 'react';
//import { CSSTransition } from 'react-transition-group';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'rgb(201, 167, 221)',
  },
  title: {
    fontWeight: 900,
    fontSize: 56,
    textAlign: 'center',
    color: 'rgb(53, 13, 54)',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
       Phonebook 
    </h1>
  </div>
);

export default HomeView;
