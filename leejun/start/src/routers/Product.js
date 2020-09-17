import React, { useEffect, useState } from 'react';
import Items from '../jsons/items.json';

const Product = ({ match: { params: { category } } }) => {
	const [list, setList] = useState([]);

	const trans = (value) => {
		switch (value) {
			case 1:
				return '수산물';
			case 2:
				return '청과';
			case 3:
				return '야채';
			default:
				return '상품';
		}
	};

	const transType = (value) => {
		switch (value) {
			case 'fish': return 1;
			case 'fruit': return 2;
			case 'vegetable': return 3;
			default : return null;
		}
	}

	useEffect(() => {
		if (category === 'all') {
			setList(Items);
			return;
		}
		// console.log('change! ' + category);
		const getType = transType(category);
		const newList = Items.filter(item => item.type === getType);
		setList(newList);
	}, [category]);

	//componentDidMount
	useEffect(() => {
		console.log('rendering');
		setList(Items);
	}, []);

	return (
		<div>
			{category === 'fish' ? (
				<h1>fish</h1>
			) : null}
			{/* <h1>{category}</h1> */}
			<ul>
				{list.map((item) => (
					<li key={`ITEM${item.id}`}>
						[{trans(item.type)}] {item.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Product;