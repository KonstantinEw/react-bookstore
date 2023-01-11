import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";

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

interface IResetEmail {
  email: string;
}

interface IUser {
  name: string;
  email: string;
  isAuth: boolean;
  error?: string;
  isLoading: boolean;
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

export const fetchUpdateUser = createAsyncThunk<
  void,
  IRegisterUser,
  { rejectValue: FirebaseError }
>("auth/updateUser", async ({ name, email, password }, { rejectWithValue }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    try {
      await updatePassword(user, password);
      await updateEmail(user, email);
      await updateProfile(user, {
        displayName: name,
      });
    } catch (error) {
      const firebaseError = error as { code: FirebaseError };
      return rejectWithValue(firebaseError.code);
    }
  }
});

export const fetchSignOut = createAsyncThunk<void, void, { rejectValue: FirebaseError }>(
  "auth/signOut",
  async (params, { rejectWithValue }) => {
    const auth = getAuth();
    try {
      await signOut(auth);
    } catch (error) {
      const firebaseError = error as { code: FirebaseError };
      return rejectWithValue(firebaseError.code);
    }
  },
);

export const fetchResetPassword = createAsyncThunk<
  void,
  IResetEmail,
  { rejectValue: FirebaseError }
>("auth/resetPassword", async ({ email }, { rejectWithValue }) => {
  const auth = getAuth();
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    const firebaseError = error as { code: FirebaseError };
    return rejectWithValue(firebaseError.code);
  }
});

const initialState: IUser = {
  name: "",
  email: "",
  isAuth: false,
  error: undefined,
  isLoading: false,
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
    builder.addCase(fetchRegisterUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRegisterUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.name = payload.userName;
      state.email = payload.userEmail;
    });
    builder.addCase(fetchRegisterUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.code;
    });

    builder.addCase(fetchSignIn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSignIn.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.email = payload.userEmail;
      state.name = payload.userName;
    });
    builder.addCase(fetchSignIn.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.code;
    });

    builder.addCase(fetchUpdateUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUpdateUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(fetchUpdateUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.code;
    });

    builder.addCase(fetchSignOut.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSignOut.fulfilled, (state) => {
      state.isLoading = false;
      state.isAuth = false;
    });
    builder.addCase(fetchSignOut.rejected, (state, { payload }) => {
      state.error = payload?.code;
    });

    builder.addCase(fetchResetPassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchResetPassword.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchResetPassword.rejected, (state, { payload }) => {
      state.error = payload?.code;
    });
  },
});

export default userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;
