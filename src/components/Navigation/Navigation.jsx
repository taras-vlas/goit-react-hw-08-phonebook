import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { authSelectors } from '../../redux/auth';
import routes from '../../routes';

import styles from './Navigation.module.scss'; 

// Компонент навигації Bar-меню application(застосування)
const Navigation = ({ isAuthenticated }) => (
  <nav>
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink
          exact
          to={routes.HOME}
          className={styles.link}
          activeClassName={styles['link--active']}
        >
          Home
        </NavLink>
      </li>

      {isAuthenticated && (
        <li>
          <NavLink
            to={routes.CONTACTS}
            className={styles.link}
            activeClassName={styles['link--active']}
          >
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  </nav>
);

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(Navigation);
