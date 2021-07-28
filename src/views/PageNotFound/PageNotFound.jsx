import { NavLink } from 'react-router-dom';

import routes from '../../routes';
//import Title from '../../components/Title';
import { ReactComponent as SpaceImage } from '../../assets/images/404.svg';
import styles from './PageNotFound.module.scss';

// Компонент сторінки 404
const PageNotFound = () => (
  <div className={styles.container}>
    {/* <Title>Houston, we’ve had an ERROR</Title> */}

    <div className={styles.thumb}>
      <SpaceImage title="Error 404" alt="Error 404" className={styles.image} />
    </div>

    <p className={styles.text}>
      Error 404   You’re looking for page is missing because it was moved, renamed, or deleted.
    </p>

    <NavLink
      to={routes.HOME}
      className={styles.button}
      title="Return to Home"
      aria-label="Return to Home page"
    >
      Return to Home
    </NavLink>
  </div>
);

export default PageNotFound;
