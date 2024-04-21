import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import HttpsRedirect from "react-https-redirect";
import { store } from './store/store.ts';
import './index.css';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HttpsRedirect>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </HttpsRedirect>
  </React.StrictMode>
);
