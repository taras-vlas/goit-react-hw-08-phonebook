import styles from './AddTodoButton.module.scss';

const AddTodoButton = () => (
    // button__обгортка
  <div className={styles.button__wrapper}>
    <button type="submit" className={styles.button}>
      Add contact
    </button>
  </div>
);

export default AddTodoButton;