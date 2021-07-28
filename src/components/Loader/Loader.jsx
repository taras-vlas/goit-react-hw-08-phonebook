import Spinner from 'react-loader-spinner';
import styles from './Loader.module.scss';

//  Компонент  Spinner
export default function Loader() {
  return (
    
    <div className={styles.loader}>
      <Spinner
        role="alert"          
        type="Circles"
        color="#00BFFF"
        width={40}
        height={40}
      />
    </div>
  );
}



// const Loader = () => (
//   <div className={styles.loader}>
  
//   </div>
// );

// export default Loader;