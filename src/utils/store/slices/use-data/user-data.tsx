import { createSlice } from "@reduxjs/toolkit";
import { IUserData } from "./interface-user-data";

export interface IUserDataSlice {
  userData: IUserData | {};
}

const initialState: IUserDataSlice = {
  userData: {},
};

export const userData = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = userData.actions;

export default userData.reducer;
