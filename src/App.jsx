import { Suspense, lazy, useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom'; 

import routes from './routes';
import { authOperations } from './redux/auth';

import Container from './components/Container';
import AuthBar from './components/AuthBar';
import Loader from './components/Loader';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import { ToastContainer } from 'react-toastify';
//import Alert from '@material-ui/lab/Alert';
import 'react-toastify/dist/ReactToastify.css';


const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const RegistrationPage = lazy(() =>
  import('./views/RegistrationPage' /* webpackChunkName: "register-page" */),
);
const ContactsPage = lazy(() =>
  import('./views/ContactsPage' /* webpackChunkName: "contacts-page" */),
);
const LoginPage = lazy(() =>
  import('./views/LoginPage' /* webpackChunkName: "login-page" */),
);
const PageNotFound = lazy(() =>
  import('./views/PageNotFound' /* webpackChunkName: "404-page" */),
);

const App = ({ getCurrentUser }) => {
  // Отримання поточного юзера при маунті application/застосування 
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <Container>
      <AuthBar />

      <Suspense fallback={<Loader />}>
        <Switch>

          <PublicRoute
            exact path={routes.HOME}
            component={HomePage} />

          <PublicRoute
            path={routes.REGISTRATION}
            component={RegistrationPage}
            restricted
            redirectTo={routes.CONTACTS} />

          <PublicRoute
            path={routes.LOGIN}
            component={LoginPage}
            restricted
            redirectTo={routes.CONTACTS} />

          <PrivateRoute
            path={routes.CONTACTS}
            component={ContactsPage}
            redirectTo={routes.LOGIN} />

          <PublicRoute component={PageNotFound} />

        </Switch>
      </Suspense>

      <ToastContainer autoClose={2000} />
    </Container>
  );
};

const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
