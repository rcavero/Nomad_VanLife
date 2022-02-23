import React, { useContext, useEffect, useState } from "react";
import "../../styles/wishList.css";
import { Todos } from "../component/todos";
import { Context } from "../store/appContext";

const WhishList = () => {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState("");

	const { store, actions } = useContext(Context);

	useEffect(() => {
		// Crear el fetch este dentro de una función para trarnos la lista de todos de la API y asignarlos a la variable todos
		fetch("https://assets.breatheco.de/apis/fake/todos/user/RCavero")
			.then((response) => response.json())
			.then((response) => {
				setTodos(response);
			});
	}, []);

	useEffect(() => {
		if (store.token && store.token != "" && store.token != undefined) actions.getMessage();
	}, [store.token]);

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
		// }).then(()=>funcionFetchGetTodos);
		//llamar a la función que hemos creado del useEffect
	};

	const deleteTodo = (listUpdated) => {
		console.log(listUpdated, todos)
		// setTodos(listUpdated)
		// Recibe el índice del elemento a eliminar y monta un todos nuevo con todos los elementos menos el del indice que le acabamos de pasar
		const todos1 = todos.filter((x, y) => y !== listUpdated)
		setTodos(todos1)
		fetch("https://assets.breatheco.de/apis/fake/todos/user/RCavero", {
			method: "PUT",
			body: JSON.stringify(todos1),
			headers: {
				"Content-Type": "application/json",
			},
		})
		// }).then(()=>funcionFetchGetTodos);
		//llamar a la función que hemos creado del useEffect
	};

	return (
		<div className="container-fluid d-flex vh-100">
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
								if (todo.trim() !== "") {
									addTodo();
									setTodo("");
								}
							}
						}}
					/>
					<button className="btn btn-success" type="button" id="button-addon2"
						onClick={() => {
							if (todo.trim() !== "") {
								addTodo();
								setTodo("");
							}
						}}
					>Add Task</button>
				</div>
				<Todos listTodos={todos} functionDelete={(itemList) => deleteTodo(itemList)} />
				{/* This is a part of the example for making athenticated requests */}
				<div className="alert alert-info d-block">{store.message}</div>
			</div>
		</div>
	);
};

export default WhishList;