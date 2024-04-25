import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'authentication',
	initialState: {
		isauthenticated: false,
	},
	reducers: {
		login(state, action) {
			state.isauthenticated = true;
		},
		logout(state, action) {
			state.isauthenticated = false;
		},
	},
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
