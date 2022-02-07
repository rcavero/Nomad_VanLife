import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import "../../styles/todos.css";

export const Todos = (props) => {
	const deleteTodo = (index) => {
		console.log(props.listTodos[index]);
		const listTodosUpdated = props.listTodos;
		listTodosUpdated.splice(index, 1);
		console.log(listTodosUpdated);
		props.functionDelete(listTodosUpdated);
	};

	return (
		<ol className="row">
			{props.listTodos.map((value, index) => {
				return (
					<li key={index}>
						{value.label}
						<button
							type="button"
							class="btn-close"
							aria-label="Close"
							onClick={() => {
								deleteTodo(index);
							}}></button>
					</li>
				);
			})}
		</ol>
	);
};

Todos.propTypes = {
	listTodos: propTypes.array,
	functionDelete: propTypes.func,
};