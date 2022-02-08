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
		<div className="container-fluid justify-content-center px-0 mt-3">
			{/* <ol className="row">
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
			</ol> */}
			<div className="card">
				<ul className="list-group list-group-flush">
					{props.listTodos.map((value, index) => {
						return (
							<li className="list-group-item d-flex justify-content-between align-items-center mt-1 mb-1 fw-bold fs-6" key={index}>
								{value.label}
								<button
									type="button"
									class="btn-close"
									aria-label="Close"
									onClick={() => {
										deleteTodo(index);
									}}>
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>

	);
};

Todos.propTypes = {
	listTodos: propTypes.array,
	functionDelete: propTypes.func,
};