
import {applyMiddleware, combineReducers, compose} from 'redux';
import {booksReducer} from './reducers/books.reducer';
import {booksMiddleware} from './middleware/books';
import {apiMiddleware} from './middleware/api';
import {notificationsReducer} from "./reducers/notification.reducer";
import {normalizeMiddleware} from "./middleware/normalize";
import {notificationMiddleware} from "./middleware/notification";
import {actionSplitterMiddleware} from "./middleware/actionSplitter";
import {undoable} from "./reducers/undoable";
import { configureStore } from '@reduxjs/toolkit';
import {loggerMiddleware} from "./middleware/logger";

// shape the state structure
const rootReducer = combineReducers({
  books: undoable(booksReducer),
  notification: notificationsReducer
});

// create the feature middleware array
const featureMiddleware = [
  booksMiddleware
];

// create the core middleware array
const coreMiddleware = [
  actionSplitterMiddleware,
  apiMiddleware,
  normalizeMiddleware,
  notificationMiddleware,
  loggerMiddleware
];


// create and configure the store
export const store = configureStore({reducer: rootReducer,middleware: (getDefaultMiddleware) => {
  let middleware = getDefaultMiddleware().concat(...featureMiddleware, ...coreMiddleware)
  return middleware;
}});