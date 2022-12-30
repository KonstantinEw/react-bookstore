import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  name: string | null;
  email: string | null;
  id: string | null;
  isAuth: boolean;
}

const initialState: IUser = {
  name: "",
  email: "",
  id: "",
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.isAuth = true;
    },
    removeUser: (state) => {
      state.name = null;
      state.id = null;
      state.email = null;
      state.isAuth = false;
    },
  },
});

export default userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;
