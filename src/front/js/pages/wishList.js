import React, { useContext, useEffect, useState } from "react";
import "../../styles/wishList.css";
import { Todos } from "../component/todos";



const WhishList = () => {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState("");

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/RCavero")
			.then((response) => response.json())
			.then((response) => {
				setTodos(response);
			});
	}, []);

	const addTodo = () => {
		const data = [...todos, { label: todo, done: false }];
		console.log(data);
		setTodos(data);
		fetch("https://assets.breatheco.de/apis/fake/todos/user/RCavero", {
			method: "PUT",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		});
	};

	const deleteTodo = (listUpdated) => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/RCavero", {
			method: "PUT",
			body: JSON.stringify(listUpdated),
			headers: {
				"Content-Type": "application/json",
			},
		})
		setTodos(listUpdated)
	};

	return (
		<div className="container-fluid">
		<div className="container-fluid text-center col-xl-6 col-lg-7 col-md-8 col-sm-10 col-12 mt-5 mb-5 pb-5 pt-3">
			<h1 className="mb-5">Wish List</h1>
			
			<div className="input-group mb-4">
				<input type="text" name="todo" className="form-control" placeholder="Add something to your Wish List" aria-label="Recipient's username" aria-describedby="button-addon2"
					onChange={(event) => {
						return setTodo(event.target.value);
					}}
					value={todo}
					onKeyPress={(event) => {
						if (event.key === 'Enter') {
							addTodo();
							setTodo("");
						}
					}}
				/>
					<button className="btn btn-success" type="button" id="button-addon2" 
						onClick={()=>{
							addTodo();
							setTodo("");
						}}
					>Add Task</button>
			</div>
			<Todos listTodos={todos} functionDelete={deleteTodo} />
		</div>
		</div>
	);
};

export default WhishList;