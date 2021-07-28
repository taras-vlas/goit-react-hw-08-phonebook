import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const styles = {
  container: {
    textAlign: 'center',
  },
  status: { fontSize: 96, marginBottom: 16 },
  navLink: { textDecoration: 'underline', fontWeight: 500 },
};

const NotFoundView = () => (
  <div style={styles.container}>
    <h1 style={styles.status}>Error 404</h1>

    <p>
      This page is missing. Error 404
      <NavLink
        style={styles.navLink}
        to={routes.HOME}
        title="Return to Home"
        aria-label="Return to Home page">
        Return to Home Page
      </NavLink>
    </p>
  </div>
);

export default NotFoundView;
