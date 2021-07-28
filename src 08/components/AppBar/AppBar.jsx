import React from 'react';
import { useSelector } from 'react-redux';
//import { CSSTransition } from 'react-transition-group';

//import { getIsAuthenticated } from '../../redux/auth/authSelectors';
import { authSelectors } from '../../redux/auth';

import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

import style from './AppBar.module.css';

// Компонент  бара
export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated); // Селектор статуса авторизации юзера

  return (
    <header className={style.AppBar}>
      <Navigation />

      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

// export default function AppBar() {
//   const isAuthenticated = useSelector(getIsAuthenticated);
  
//   return (
//     <CSSTransition
//       in={true}
//       appear={true}
//       timeout={500}
//       classNames={style}
//       unmountOnExit
//     >
//       {stage => {
//         return (
//           <header className={style.AppBar}>
//             <CSSTransition
//               in={stage === 'entered'}
//               timeout={500}
//               classNames={style}
//               unmountOnExit
//             >
//               <Navigation />
//             </CSSTransition>

//             {isAuthenticated
//               ? <UserMenu />
//               : <AuthNav />}
//           </header>
//         );
//       }}
//     </CSSTransition>
//   );
// }






// const AppBar = ({ isAuthenticated }) => (
//   <CSSTransition
//     in={true}
//     appear={true}
//     timeout={500}
//     classNames={style}
//     unmountOnExit
//   >
//     {stage => {
//       return (
//         <header className={style.AppBar}>
//           <CSSTransition
//             in={stage === 'entered'}
//             timeout={500}
//             classNames={style}
//             unmountOnExit
//           >
//             <Navigation />
//           </CSSTransition>

//           {isAuthenticated ? <UserMenu /> : <AuthNav />}
//         </header>
//       );
//     }}
//   </CSSTransition>
// );

// const mapStateToProps = state => ({
//   isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(AppBar);
