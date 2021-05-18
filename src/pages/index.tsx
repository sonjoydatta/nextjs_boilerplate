import { CSSProperties, useEffect } from 'react';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQty, getCartState, incrementQty, updateStock } from '@store/reducers/cart';

const Home: NextPage = () => {
	const dispatch = useDispatch();
	const { stock, quantity } = useSelector(getCartState);

	useEffect(() => {
		dispatch(updateStock(10));
	}, []);

	return (
		<div>
			<p>Available stock: {stock}</p>
			<p>Quantity: {quantity}</p>
			<button style={buttonStyle} onClick={() => dispatch(decrementQty())}>
				Decrement -
			</button>
			<button style={buttonStyle} onClick={() => dispatch(incrementQty())}>
				Increment +
			</button>
		</div>
	);
};

export default Home;

const buttonStyle: CSSProperties = {
	cursor: 'pointer',
	padding: '0.5rem 1rem',
	margin: '0 0.5rem',
	border: 'none',
	color: 'white',
	fontSize: '16px',
	backgroundColor: 'black',
};
