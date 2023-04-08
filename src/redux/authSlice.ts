import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  profileId: string;
  address: string;
}

const initialState = { profileId: "", address: "" } as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateProfileId(state, action) {
      state.profileId = action.payload;
    },
    updateAddress(state, action) {
      state.address = action.payload;
    },
  },
});

export const { updateProfileId, updateAddress } = authSlice.actions;
export default authSlice.reducer;
