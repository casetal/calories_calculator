import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import store, { persister } from './components/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate load={null} persistor={persister}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);