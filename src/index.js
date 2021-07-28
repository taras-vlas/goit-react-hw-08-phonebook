import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'; // Імпорт провайдера для сховища/store
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store'; // Імпорт  об'єкта зі store/сховища

import App from './App.jsx';
import Loader from './components/Loader';

import 'modern-normalize/modern-normalize.css';
import './App.module.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={<Loader />} persistor={store.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
