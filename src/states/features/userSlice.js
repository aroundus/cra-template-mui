import { createSlice } from '@reduxjs/toolkit';

export const { actions: userActions, reducer: userReducer } = createSlice({
  name: 'user',
  initialState: {
    userID: undefined,
    email: undefined,
    isLoggedIn: false,
    name: undefined,
  },
  reducers: {
    setLoggedIn(state, action) {
      state.isLoggedIn = Boolean(action.payload);
    },
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});
