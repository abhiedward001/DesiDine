import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice.js';
import authReducer from './authSlice.js';

const appStore = configureStore({
	reducer: {
		cart: cartReducer,
		authentication: authReducer,
	},
});

export default appStore;
