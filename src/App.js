import "./App.css";
// import { useRoutes } from "hookrouter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
// import Routes from "./routes";
import UserMenu from "./components/UserMenu";
import Content from "./components/Content";
import { getCurrentUser } from "./redux/user/operations";
import "./App.css";

const App = () => {
  // const routeResult = useRoutes(Routes);
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.user.isAuthorized);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      {isAuthorized ? (
        <p>isLoading...</p>
      ) : (
        <div className="body">
          <UserMenu />
          <Content />
          {/* {routeResult}  */}
          <ToastContainer />
        </div>
      )}
    </div>
  );
};

export default App;
