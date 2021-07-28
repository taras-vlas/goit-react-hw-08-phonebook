import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  checkStyles: {
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

export default useStyles;