import { lazy } from "react";

const LoginPage = lazy(() =>
  import("./page/LoginPage" /* webpackChunkName: "login-page" */)
);

const RegisterPage = lazy(() =>
  import("./page/RegisterPage" /* webpackChunkName: "register-page" */)
);

const Routes = [            //Тут для маршрута встановлюються атрибути:
  {
    path: "/login",          //Спрацьовує (маршурт)путь "/login"  та обробляється Компонентою  LoginPage
    label: "Login",
    component: LoginPage,
    isProtected: false,
    isNotLoggedOn: true,
  },
  {
    path: "/register",
    label: "Register",
    component: RegisterPage,
    isProtected: false,
    isNotLoggedOn: true,
  },
];

export default Routes;








// const Routes = {
//   "/login": () => <LoginPage />,
//   "/register": () => <RegisterPage />,
// };