import { configureStore } from '@reduxjs/toolkit';

import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {},
    devTools: process.env.NODE_ENV === 'development',
    preloadedState: initialState,
  });
};
