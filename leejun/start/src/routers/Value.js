import React, { useState } from 'react';
import Page2 from '../components/Page2';
import Page1 from '../components/Page1';

const Value = () => {
	const [data, setData] = useState("");

	const setValue = val => {
		setData(val);
	};

	return (
		<>
			<Page1 setValue={setValue} />
			<Page2 value={data} />
		</>
	);
};

export default Value;