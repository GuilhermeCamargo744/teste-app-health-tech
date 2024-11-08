import { createSlice } from "@reduxjs/toolkit";
import { IUserData } from "./interface-user-data";

export interface IUserDataSlice {
  user: IUserData;
}

const initialState: IUserDataSlice = {
  user: {},
};

export const userData = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    setResetReduxUserData: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { setUserData, setResetReduxUserData } = userData.actions;

export default userData.reducer;
