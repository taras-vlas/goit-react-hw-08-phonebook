import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
// import { useRoutes } from "hookrouter";
// import Routes from "./routes";
import UserMenu from "./components/UserMenu/UserMenu";
import Content from "./components/ChoiceMenu";
import { getCurrentUser } from "./redux/user/user-operations";
import Spinner from 'react-loader-spinner';


const App = () => {
  // const routeResult = useRoutes(Routes);
  const dispatch = useDispatch();
  const isСheckIn = useSelector((state) => state.user.isСheckIn);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isСheckIn
        ? (
           <Spinner type="TailSpin" color="#00BFFF" height={40} width={40} className="Spinner" timeout={3000} />         //<span>Loading ...</span>
          )
        : (
          <div className="body">
            <UserMenu />
            <Content />
            {/* {routeResult}  */}
            <ToastContainer />
          </div>
      )}
    </>
  );
};

export default App;
