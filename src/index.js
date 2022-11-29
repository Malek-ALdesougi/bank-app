import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";
import store from "./store";
import Home from "./Home";
import Form from "./From";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="form" element={<Form />} />
        </Routes>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);
