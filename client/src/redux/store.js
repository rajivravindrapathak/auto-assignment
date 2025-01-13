import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import repoSlice from './repoSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    repos: repoSlice,
  },
});

export default store;
