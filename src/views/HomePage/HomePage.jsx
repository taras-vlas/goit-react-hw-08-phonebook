import { NavLink } from 'react-router-dom';
import Title from '../../components/Title';
import { ReactComponent as MainImage } from '../../assets/images/main.svg';

import routes from '../../routes';

import styles from './HomePage.module.scss';

// Компонент головної сторінки application/застосування
const HomePage = () => (
  <main>
    <section className={styles.container}>
      <Title>Phonebook</Title>

      <div className={styles.thumb}>
        <MainImage
          title="Go to contacts"
          alt="BlueSquare"
          className={styles.image}
        />
      </div>



      <NavLink
        to={routes.CONTACTS}
        className={styles.button}
        title="Go to contacts"
        aria-label="Go to contacts"
      >
        To contacts
      </NavLink>

    </section>
  </main>
);

export default HomePage;
