import React from "react";
import { useSelector, useDispatch } from "react-redux";
import  Routes  from "../../routes";
import { NavLink } from "react-router-dom";
// import { A } from "hookrouter";
import Button from "@material-ui/core/Button";
import { logout } from "../../redux/user/user-operations";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useStyles from "./UserMenuStyles";

const checkShowPage = (isProtected, isLoggedOn, isNotLoggedOn) => {
  const showProtected = !isProtected || (isProtected && isLoggedOn);
  const showLoggedOn = !isNotLoggedOn || (isNotLoggedOn && !isLoggedOn);

  return showProtected && showLoggedOn;
};

const UserMenu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoggedOn = useSelector((state) => state.user.isLoggedOn);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => dispatch(logout());
  return (
    <div    className={classes.container}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
            
      <Menu
        className={classes.menu}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}        
      >
        {Routes.map(({ path, exact, label, isProtected, isNotLoggedOn }) => {
          const showInMenu = checkShowPage(
            isProtected,
            isLoggedOn,
            isNotLoggedOn
          );

          return (showInMenu
            ? (
              // <A href={path} key={path} className={classes.link}>
              //   {label}
              // </A>
              <MenuItem onClick={handleClose}>
                <NavLink
                  activeClassName={classes.active}
                  key={path}
                  exact={exact}
                  to={path}
                >
                  {label}
                </NavLink>
              </MenuItem>
            )
            : null
          );
        })}
      </Menu>
      
      <Button
        className={classes.button}
        onClick={handleLogOut}
        variant="contained"
        color="primary"
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
