import { createSlice } from '@reduxjs/toolkit';

const repoSlice = createSlice({
  name: 'repos',
  initialState: {
    list: [],
    selectedRepo: null,
  },
  reducers: {
    setRepos(state, action) {
      state.list = action.payload;
    },
    selectRepo(state, action) {
      state.selectedRepo = action.payload;
    },
  },
});

export const { setRepos, selectRepo } = repoSlice.actions;
export default repoSlice.reducer;
