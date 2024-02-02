import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';


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

export const snackSlice = createSlice({
  name: 'snackbar',
  initialState: initialState,
  reducers: {
    open(state, action: PayloadAction<string>) {
      Alert.alert(action.payload);
    },
  },
});

export const snackAction = snackSlice.actions;
export const snackReducer = snackSlice.reducer;