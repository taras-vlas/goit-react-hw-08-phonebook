import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
 import { Provider as AlertProvider } from "react-alert";
 import AlertTemplate from "react-alert-template-basic";
import './styles.css';
import App from './App';
  import { BrowserRouter as Router } from "react-router-dom";
  import { PersistGate } from "redux-persist/integration/react";
  import { store, persistor } from "./redux/store";


            // const options = {
            //   // you can also just use 'bottom center'
            //       //position: positions.BOTTOM_CENTER,
            //   timeout: 5000,
            //   offset: "30px",
            //   // you can also just use 'scale'
            //       //transition: transitions.SCALE,
            // };


ReactDOM.render(
  <AlertProvider template={AlertTemplate}   >
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <App />
          </Router>
        </PersistGate>
    </Provider>
  </AlertProvider>
  , document.getElementById('root')
);
