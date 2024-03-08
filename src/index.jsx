import React from 'react';
import ReactDOM from "react-dom/client";
import 'normalize.css/normalize.css';
import {Provider} from 'react-redux';
import {App} from "./ui/App";
import {store} from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);