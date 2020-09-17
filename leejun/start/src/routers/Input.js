import React from 'react';
import { useState } from 'react';

const useInput = (initialState) => {
	const [data, setData] = useState(initialState);

	const onChange = (ev) => {
		const { target: { value } } = ev;
		setData(value);
	};

	return [data, onChange];
};

const Input = () => {
	const [name, setName] = useInput("");
	const [age, setAge] = useInput("");
	const [phone, setPhone] = useInput("");

	// const onChangeName = event => {
	// 	const { target: { value } } = event;
	// 	setName(value);
	// };

	const insert = () => {
		const params = { name, age, phone };
		console.log(params);
	}

	return (
		<div>
			<input onChange={setName} value={name} placeholder="name" />
			<input onChange={setAge} value={age} placeholder="age" />
			<input onChange={setPhone} value={phone} placeholder="phone" />

			<div>
				<button onClick={insert}>Insert</button>
			</div>

			<h2>name: {name}</h2>
			<h2>age: {age}</h2>
			<h2>phone: {phone}</h2>
		</div>
	);
};

export default Input;