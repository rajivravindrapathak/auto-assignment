import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    followers: [],
  },
  reducers: {
    setUser(state, action) {
      state.data = action.payload;
    },
    setFollowers(state, action) {
      state.followers = action.payload;
    },
  },
});

export const { setUser, setFollowers } = userSlice.actions;
export default userSlice.reducer;
