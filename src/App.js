import React, { useState, useEffect } from "react";
import adventure from "./images/undraw_adventure.svg";

function App() {
	const [mydata, setMydata] = useState([]);
	const [kind, setKind] = useState("capitol");

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		fetch("https://restcountries.eu/rest/v2/all")
			.then((res) => {
				return res.json();
			})
			.then(
				(data) => {
					setMydata(data);
					console.log(mydata);
				},
				(error) => {
					console.log(error);
				}
			);
	};
	/**
	 * var arr = new Set();
while(arr.size<10){
  let min = Math.ceil(1);
  let max = Math.floor(100);
  let num = Math.floor(Math.random() * (max - min) + min);
  console.log(num)
  arr.add(num);
}
	 */
	return (
		<div className="container">
			<div className="rectangle">
				<div className="rectangle-top">
					<span>COUNTRY QUIZ</span>
				</div>
				<div className="card">
					<span>
						<img src={adventure} alt="adventure image" />
					</span>
					<div className="question">
						{kind == "capitol" ? "Capitol question" : "Flag question"}
					</div>
					<div className="answers"></div>
				</div>
			</div>
		</div>
	);
}

export default App