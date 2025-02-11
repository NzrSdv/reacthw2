const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isAuthorised: false,
  user: {
    username: "",
    email: "",
    password: "",
  },
};

const AuthentificationSlice = createSlice({
  name: "Authentification",
  initialState,
  reducers: {
    setIsAuthorised: (state,action) => {
      state.isAuthorised = action.payload;
    },
    setUser: (state,action) => {
      state.user = action.payload;
    },
  },
});

export const { setIsAuthorised, setUser } = AuthentificationSlice.actions;
export default AuthentificationSlice.reducer;
