import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.css";
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap.css";
import App from './App';
import { store } from './redux/store/store';
import { Provider } from 'react-redux'; 
import FullscreenLoader from './components/masterLayout/FullscreenLoader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <FullscreenLoader />
    </Provider>
  </React.StrictMode>
);
