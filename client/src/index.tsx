import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/app/app';
import 'leaflet/dist/leaflet.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);