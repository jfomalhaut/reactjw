import React from 'react';

const Home = ({ history, match }) => {

	const goList = () => {
		history.push('/list/1');
	};

	return (
		<div>
			<h1>Home Component</h1>
			{/* <button onClick={goList}>List페이지로</button> */}
			<button onClick={() => goList()}>List페이지로</button>
		</div>
	);
};

export default Home;