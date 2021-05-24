import { Suspense } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import  Routes  from "../../routes";
import Spinner from 'react-loader-spinner';

const Content = () => {
  return (
    <div className="content">
      <Suspense fallback={
        <Spinner type="TailSpin" color="#00BFFF" height={40} width={40} className="Spinner" timeout={3000} />         //<span>Loading ...</span>
      }>
        
        <Switch>
          {Routes.map(
            ({
              path,
              exact,
              isProtected,
              component: Component,
              isNotLoggedOn,
            }) =>
              isProtected ? (
                <PrivateRoute
                  key={path}
                  path={path}
                  exact={exact}
                  component={Component}
                />
              ) : (
                <PublicRoute
                  key={path}
                  path={path}
                  exact={exact}
                  component={Component}
                  isNotLoggedOn={isNotLoggedOn}
                />
              )
          )}
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
