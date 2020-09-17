import React, { useEffect, useState } from 'react';
import Page2 from '../components/Page2';
import Page1 from '../components/Page1';
import Axios from 'axios';

const URL = "http://www.juso.go.kr/addrlink/addrLinkApi.do?confmKey=devU01TX0FVVEgyMDIwMDkxNzIxMjMwOTExMDIwNTI=&currentPage=1&countPerPage=10&keyword=%EC%97%AD%EC%82%BC%EB%A1%9C&resultType=json";

const Value = () => {
	const [data, setData] = useState("");
	const [juso, setJuso] = useState([]);

	const setValue = val => {
		setData(val);
	};

	useEffect(() => {
		Axios.get(URL).then(res => {
			const { data: { results: { common, juso } } } = res;
			setJuso(juso);
		})
	}, []);

	return (
		<>
			<Page1 setValue={setValue} />
			<Page2 value={data} />
			{juso.map(item => (
				<h1>{item.roadAddrPart1}</h1>
			))}
		</>
	);
};

export default Value;