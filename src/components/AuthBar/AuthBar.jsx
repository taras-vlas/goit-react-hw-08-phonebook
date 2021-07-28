import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { authSelectors } from '../../redux/auth';

import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
  
import styles from './AuthBar.module.scss';

// // Компонент Bar/Header-меню application(застосування) реєстрації та авторизації
const AuthBar = ({ isAuthenticated }) => {
  
  return (
    <header className={styles.header}>
      <Navigation />

      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(AuthBar);


AuthBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};