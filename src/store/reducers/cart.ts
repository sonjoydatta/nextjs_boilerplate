import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '@store';

const initialState = {
	stock: 0,
	quantity: 0,
};
const slice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		updateStock: (state, action: UpdateStock) => {
			state.stock = action.payload;
		},

		incrementQty: (state) => {
			if (state.stock > state.quantity) state.quantity++;
		},

		decrementQty: (state) => {
			if (state.quantity > 0) state.quantity--;
		},
	},
});

export default slice.reducer;
export const { updateStock, incrementQty, decrementQty } = slice.actions;
export const getCartState = (state: AppState): typeof initialState => state.cart;

interface UpdateStock {
	payload: number;
}
