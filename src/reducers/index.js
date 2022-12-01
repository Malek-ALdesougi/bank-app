import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accounts: [
    {
      id: 1,
      customerName: "malek Zahran",
      accountNumber: "de3445",
      accountType: "empty accounts",
    },
    {
      id: 2,
      customerName: "mohammed Zahran",
      accountNumber: "987654",
      accountType: "nothing accounts",
    },
  ],

  accountsNumber : 2
};

export const userSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload);
      state.accounts.push(action.payload)
    },
    deleteUser: (state, action) => {
      console.log(action.payload);
      let newArray = state.accounts.filter((e) => e.id !== action.payload)
      
      console.log(newArray);
      return {
        ...state, accounts: newArray
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;


