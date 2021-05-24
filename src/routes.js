import { lazy } from "react";

const ContactsPage = lazy(() =>
  import("./pages/ContactsPage" /* webpackChunkName: "contacts-page" */)
);

// const LoginPage = lazy(() =>
//   import("./pages/LoginPage" /* webpackChunkName: "login-page" */)
// );

// const RegisterPage = lazy(() =>
//   import("./pages/RegisterPage" /* webpackChunkName: "register-page" */)
// );

const Routes = [            //Тут для маршрута встановлюються атрибути:
  {
    path: "/contacts",       //Спрацьовує (маршурт)путь "/contact"  та обробляється Компонентою  ContactsPage
    label: "Contacts Page",
    component: ContactsPage,
    exact: true,
    isProtected: true,
  },
  // {
  //   path: "/login",          //Спрацьовує (маршурт)путь "/contact"  та обробляється Компонентою  LoginPage
  //   label: "Login",
  //   component: LoginPage,
  //   isProtected: false,
  //   isNotLoggedOn: true,
  // },
  // {
  //   path: "/register",
  //   label: "Register",
  //   component: RegisterPage,
  //   isProtected: false,
  //   isNotLoggedOn: true,
  // },
];

// const Routes = {
//   "/contacts": () => <ContactsPage />,
//   "/login": () => <LoginPage />,
//   "/register": () => <RegisterPage />,
// };

export default Routes;
