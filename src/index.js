// import React from 'react';
// import ReactDOM from "react-dom/client";
// import {Provider} from 'react-redux';
// import {App} from "./ui/App";
import { fetchBooks } from "./redux/actions/books";
import {store} from "./redux/store";


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

store.dispatch(fetchBooks({query:'redux'}));


// const unsubscribe = store.subscribe(() =>
//   console.log('State after dispatch: ', store.getState())
// )