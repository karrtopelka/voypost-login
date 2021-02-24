import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    password: '',
  },
  reducers: {
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { changeEmail, changePassword } = userSlice.actions;

export const selectEmail = (state) => state.user.email;
export const selectPassword = (state) => state.user.password;

export default userSlice.reducer;
