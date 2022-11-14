import React from 'react';
import ToDoListCard from './ToDoListCard';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToDos } from '../actions/setToDos';
import { addToDo } from '../actions/addToDo';
import '../css/login.css';
import { moveLeft } from '../actions/moveLeft';

const Login = () => {
	const dispatch = useDispatch();
	const [account, setAccount] = useState([]);
	const handleLogin = (e) => {
		e.preventDefault();
		console.log(e);
		let input = {
			username: e.target.form[0].value,
			password: e.target.form[1].value,
		};
		axios
			.post('http://127.0.0.1:5000/sign-in', input)
			.then(function (response) {
				console.log(response);
				setAccount({
					accountName: response.data.username,
					userID: response.data.user_id,
				});
				setToDos(dispatch, response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	const handleAddToDo = (e) => {
		e.preventDefault();
		console.log(e);
		let input = {
			title: e.target.form[0].value,
			description: e.target.form[1].value,
			date: e.target.form[2].value,
		};
		axios
			.post('http://127.0.0.1:5000/create-a-to-do', input)
			.then(function (response) {
				console.log('This is create to do response', response);
				addToDo(dispatch, response);
			})
			.catch((error) => {
				if (error.response) {
					console.log(error.response);
					console.log(error.response.status);
					console.log(error.response.headers);
				}
			});
	};
	return (
		<>
			<form className="signInFormContainer">
				<div>
					<h1>Sign in</h1>
				</div>
				<div className="signInInputContainer">
					<input type="username" placeholder="username" />
					<input type="password" placeholder="password" />
					<button onClick={handleLogin}>Login</button>
				</div>
			</form>
			{account && (
				<div className="welcomeSignIn">
					<p>welcome {account.accountName}</p>
				</div>
			)}
			<form>
				<div>
					<h1>ToDoList</h1>
					<div>
						<h6>To add a to do, please enter it below.</h6>
						<h6>To reorder, drag the boxes anywhere.</h6>
					</div>
					<div>
						<input type="text" placeholder="Title" />
						<input type="text" name="description" placeholder="description" />
						<input type="date" name="date" />
					</div>
					<div>
						<button onClick={handleAddToDo}>Add ToDo</button>
					</div>
				</div>
			</form>
			<div>
				<ToDoListCard />
			</div>
		</>
	);
};

export default Login;
