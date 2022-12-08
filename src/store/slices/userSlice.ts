import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  name: string;
  email: string;
}

const initialState: IUser = {
  name: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
