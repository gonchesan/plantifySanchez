import { createSlice } from "@reduxjs/toolkit/react";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: null,
      idToken: null,
      localId: null,
      image: null,
    },
  },

  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      return {
        ...state,
        user,
      };
    },
    clearUser: () => {
      return {
        user: {
          email: null,
          idToken: null,
          localId: null,
        },
      };
    },
    setProfilePicture: (state, action) => {
      const { image } = action.payload;
      return { ...state, user: { ...state.user, image } };
    },
  },
});

export const { setUser, clearUser, setProfilePicture } = authSlice.actions;
export default authSlice.reducer;
