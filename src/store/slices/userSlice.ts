import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface IRegisterUser {
  name: string;
  email: string;
  password: string;
}

interface ISsgnInUser {
  email: string;
  password: string;
}

interface IUserData {
  userName: string;
  userEmail: string;
}

interface IUser {
  name: string;
  email: string;
  isAuth: boolean;
  error?: string;
}

export const fetchRegisterUser = createAsyncThunk<
  IUserData,
  IRegisterUser,
  { rejectValue: FirebaseError }
>("auth/registerUser", async ({ name, email, password }, { rejectWithValue }) => {
  const auth = getAuth();
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const userName = name as string;
    const userEmail = response.user.email as string;
    return { userEmail, userName };
  } catch (error) {
    const firebaseError = error as { code: FirebaseError };
    return rejectWithValue(firebaseError.code);
  }
});

export const fetchSignIn = createAsyncThunk<IUserData, ISsgnInUser, { rejectValue: FirebaseError }>(
  "auth/SignIn",
  async ({ email, password }, { rejectWithValue }) => {
    const auth = getAuth();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const userName = response.user.displayName as string;
      const userEmail = response.user.email as string;
      return { userEmail, userName };
    } catch (error) {
      const firebaseError = error as { code: FirebaseError };
      return rejectWithValue(firebaseError.code);
    }
  },
);

const initialState: IUser = {
  name: "",
  email: "",
  isAuth: false,
  error: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.isAuth = true;
    },
    removeUser: (state) => {
      state.name = "";
      state.email = "";
      state.isAuth = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchRegisterUser.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.name = payload.userName;
      state.email = payload.userEmail;
    });
    builder.addCase(fetchRegisterUser.rejected, (state, { payload }) => {
      state.error = payload?.code;
    });

    builder.addCase(fetchSignIn.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.email = payload.userEmail;
      state.name = payload.userName;
    });
    builder.addCase(fetchSignIn.rejected, (state, { payload }) => {
      state.error = payload?.code;
    });
  },
});

export default userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;
