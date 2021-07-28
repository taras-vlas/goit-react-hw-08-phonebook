import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './AuthNav.module.scss';

// Компонент меню реєстрації та авторизації
const AuthNav = () => (
  <ul className={styles.list}>
    <li className={styles.item}>
      <NavLink
        to={routes.REGISTRATION}
        className={styles.link}
        activeClassName={styles['link--active']}
      >
        Sign up
      </NavLink>
    </li>

    <li className={styles.item}>
      <NavLink
        exact
        to={routes.LOGIN}
        className={styles.link}
        activeClassName={styles['link--active']}
      >
        Log in
      </NavLink>
    </li>
  </ul>
);

export default AuthNav;
