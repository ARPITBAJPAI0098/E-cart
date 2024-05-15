import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser, checkUser, updateUser } from "./Authapi.js";

const initialState = {
  loggedInUserToken: null, // this should only contain user identity => 'id'/'role'
  status: "idle",
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const response = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const checkuserasync = createAsyncThunk(
  "user/checkUser",
  async (loginInfo) => {
    const response = await checkUser(loginInfo);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const updateuserasync = createAsyncThunk(
  "user/updateUser",
  async (update) => {
    const response = await updateUser(update);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

// export const checkAuthAsync = createAsyncThunk('user/checkAuth', async () => {
//   try {
//     const response = await checkAuth();
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// });
// export const resetPasswordRequestAsync = createAsyncThunk(
//   'user/resetPasswordRequest',
//   async (email,{rejectWithValue}) => {
//     try {
//       const response = await resetPasswordRequest(email);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error);

//     }
//   }
// );

// export const resetPasswordAsync = createAsyncThunk(
//   'user/resetPassword',
//   async (data,{rejectWithValue}) => {
//     try {
//       const response = await resetPassword(data);
//       console.log(response);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error);

//     }
//   }
// );

// export const signOutAsync = createAsyncThunk(
//   'user/signOut',
//   async () => {
//     const response = await signOut();
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const authSlice = createSlice({
  name: "user",
  initialState,
  error: null,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUserToken = action.payload;
        //here payload user ka data
      })
      .addCase(checkuserasync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkuserasync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUserToken = action.payload;
      })
      .addCase(checkuserasync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })
      .addCase(updateuserasync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateuserasync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUserToken = action.payload;
      });
    //   .addCase(checkAuthAsync.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(checkAuthAsync.fulfilled, (state, action) => {
    //     state.status = 'idle';
    //     state.loggedInUserToken = action.payload;
    //     state.userChecked = true;
    //   })
    //   .addCase(checkAuthAsync.rejected, (state, action) => {
    //     state.status = 'idle';
    //     state.userChecked = true;
    //   })
    //   .addCase(resetPasswordRequestAsync.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(resetPasswordRequestAsync.fulfilled, (state, action) => {
    //     state.status = 'idle';
    //     state.mailSent = true;
    //   })
    //   .addCase(resetPasswordAsync.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(resetPasswordAsync.fulfilled, (state, action) => {
    //     state.status = 'idle';
    //     state.passwordReset = true;
    //   })
    //   .addCase(resetPasswordAsync.rejected, (state, action) => {
    //     state.status = 'idle';
    //     state.error = action.payload
    //   })
  },
});

export const selectLoggedInUser = (state) => state.auth.loggedInUserToken;
export const selectError = (state) => state.auth.error;

// export const selectUserChecked = (state) => state.auth.userChecked;
// export const selectMailSent = (state) => state.auth.mailSent;
// export const selectPasswordReset = (state) => state.auth.passwordReset;

// export const { } = authSlice.actions;

export default authSlice.reducer;
