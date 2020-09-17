import React from 'react';

function Page1({ setValue }) {
	return (
		<div>
			<h1>Page1</h1>
			<button onClick={() => setValue('data')}>값 바꾸기</button>
		</div>
	);
}

export default Page1;
