import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';

// Create logger middleware
const logger = createLogger({
  collapsed: true, // Makes the logger collapse the logs for better readability
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
