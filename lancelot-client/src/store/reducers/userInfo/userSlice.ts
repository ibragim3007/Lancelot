import { PayloadAction, createSlice } from '@reduxjs/toolkit';


interface StateInterface {
  userInfo?: {
    id: string;
    name: string;
  }
  loading: boolean;
  error?: string;
}

const initialState: StateInterface = {
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<StateInterface['userInfo']>) {
      state.userInfo = action.payload;
      state.loading = false;
    },
    pendingConnection(state) {
      state.loading = true;
    },
    errorGettingsCustomerOfProductInfo(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const userAction = userSlice.actions;
export const userReducer = userSlice.reducer;