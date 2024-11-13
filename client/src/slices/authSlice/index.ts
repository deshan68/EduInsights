import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  status: "failed" | "loading" | "idle" | "success";
  isAuthenticated: boolean;
  userRole: string | null;
}

const initialState: AuthState = {
  isAuthenticated: true,
  status: "idle",
  userRole: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ role: string }>) => {
      state.isAuthenticated = true;
      state.userRole = action.payload.role;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userRole = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
