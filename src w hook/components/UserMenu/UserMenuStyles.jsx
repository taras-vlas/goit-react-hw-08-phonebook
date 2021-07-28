import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  menu: { },

  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    marginTop: "0px",
    boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
  
  },
  button: {
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

  active: {
    color: "rgb(59, 138, 255)",
  },









// Form: {
//   display: "flex",
//   flexDirection: "column",
//   padding: "20px",
//   width: "400px",
//   borderRadius: "2px",
//   border: "1px solid #464545",
//   marginBottom: "20px",
// },

// Label: {
//   display: "inline-block",
//   marginBottom: "16px",
//   width: "200px",
//   fontSize: "20px",
//   color: "#171718",
//   cursor: "pointer",
// },

// Input: {
//   color: "#171718",
//   font: "inherit",
//   fontSize: "0.9rem",
//   padding: "2px",
//   borderRadius: "4px",
//   border: "1px solid #9e9d9d",
//   width: "200px",
//   outline: "0",
//       '&:focus': {  
//       border: "2px solid blue",
//       boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(41, 107, 250, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)",
//       },
// },



// Button: {
//   display: "inline-flex",
//   alignItems: "center",
//   justifyContent: "center",
//   color: "#000",
//   backgroundColor: "#c0d4f5",
//   border: "0",
//   outline: "0",
//   width: "120px",
//   padding: "2px 8px",
//   borderRadius: "4px",
//   cursor: "pointer",
//   boxShadow: "0px 2px 1px 1px rgba(0, 0, 0, 0.05)",
//   font: "inherit",
//   textTransform: "none",
//   userSelect: "none",
//   transition: "background-color 200ms ease-in-out",
//       '&:hover': { 
//       boxShadow: "0px 2px 1px 1px rgba(0, 0, 0, 0.15)",
//       backgroundColor: "rgba(0, 0, 255, 0.87)",
//       },
// },


// List: {
//   width: "500px",
// },

//  List_item: {
//   display: "flex",
//   alignItems: "center",
//   padding: "0px",
//   marginTop: "8px",
//   boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
// },

// List_button: {
//   alignItems: "flex-end",
//   marginRight: "4px",
//   marginLeft: "4px",
//   display: "inline-flex",
//   alignItems: "center",
//   justifyContent: "center",
//   color: "#000",
//   backgroundColor: "#c0d4f5",
//   border: "1px",
//   outline: "0",
//   padding: "2px 8px",
//   borderRadius: "4px",
//   cursor: "pointer",
//   boxShadow: "0px 2px 1px 1px rgba(0, 0, 0, 0.05)",
//   font: "inherit",
//   textTransform: "none",
//   userSelect: "none",
//   transition: "background-color 200ms ease-in-out",
//     '&:focus': {
//       boxShadow: "0px 2px 1px 1px rgba(0, 0, 0, 0.15)",
//       backgroundColor: "orange;",
//     },
//   },

});

export default useStyles;