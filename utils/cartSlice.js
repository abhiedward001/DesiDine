import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
		totalAmount: 1,
	},
	reducers: {
		addItem(state, action) {
			state.items.push(action.payload);
		},
		updateItem(state, action) {
			state.items = state.items.map(item =>
				item.id === action.payload.id
					? {...item, qty: item.qty + 1}
					: item,
			);
		},
		removeItem(state, action) {
			state.items = state.items.map(item =>
				item.id === action.payload.id
					? {...item, qty: item.qty - 1}
					: item,
			);
		},
		clearItem(state, action) {
			state.items = state.items.filter(item => item.id !== action.payload.id);
		},
	},
});

export const {addItem, removeItem, updateItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer;
