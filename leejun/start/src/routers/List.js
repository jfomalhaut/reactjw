import React from 'react';

const List = ({ match: { params : { number } } }) => {
	console.log(number);
	return (
		<div>
			<h1>List Component</h1>
			<h1> value: {number} </h1>
		</div>
	);
};

export default List;