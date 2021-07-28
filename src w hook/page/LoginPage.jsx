import { useState } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/user/user-operations";
import Button from "@material-ui/core/Button";
import Spinner from 'react-loader-spinner';

const useStyles = createUseStyles({
  login: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",    
  },
  form: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    width: "400px",
    borderRadius: "2px",
    border: "1px solid #464545",
    marginBottom: "20px",
  },
  label: {
    display: "inline-block",
    marginBottom: "16px",
    width: "360px",
    fontSize: "16px",
    color: "#171718",
    cursor: "pointer",
    // display: "flex",
    justifyContent: "space-between",  
  },

  button: {
    height: "25px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
    backgroundColor: "#c0d4f5",
    border: "0",
    outline: "0",
    width: "120px",
    padding: "2px 8px",
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "0px 2px 1px 1px rgba(0, 0, 0, 0.05)",
    font: "inherit",
    textTransform: "none",
    userSelect: "none",
    transition: "background-color 200ms ease-in-out",
      '&:hover': { 
      boxShadow: "0px 2px 1px 1px rgba(0, 0, 0, 0.15)",
      backgroundColor: "rgba(0, 0, 255, 0.87)",
    },
  },    
});

const LoginPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("tutgoit@ukr.net");
  const [password, setPassword] = useState("password");
  
  const isLoading = useSelector((state) => state.user.isLoading);

  const handleChangeEmail = (e) => setEmail(e.target.value);

  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { email, password };
    dispatch(login(payload));
  };

  return (
    <div className={classes.login}>
      {isLoading
        ? (<Spinner type="TailSpin" color="#00BFFF" height={40} width={40} className="Spinner" timeout={3000} />         //<span>Loading ...</span>
          )
        : (
            <form className={classes.form} onSubmit={handleSubmit}>
              
              <label className={classes.label}>
                <span>email: </span>
                <input type="email" value={email} onChange={handleChangeEmail} />
              </label>
            
              <label className={classes.label}>              
                <span>password: </span>
                <input
                  type="password"
                  value={password}
                  onChange={handleChangePassword}
                />
              </label>
            
              <Button
                type="submit"
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            
            </form>
      )}
    </div>
  );
};

export default LoginPage;
