import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../jsons/category.json';

const Navigation = () => {
	return (
		<nav>
			<ul>
				{/* <li>
					<Link to="/home">Home</Link>
				</li>
				<li>
					<Link to="/list/10">List</Link>
				</li> */}
				{Category.map(item => (
					<li key={`CATEGORY${item.id}`}>
						<Link to={`/product/${item.path}`}>{item.label}</Link>
					</li>
				))}
			</ul>

		</nav>
	);
};

export default Navigation;