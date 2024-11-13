import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  state: "loading",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
