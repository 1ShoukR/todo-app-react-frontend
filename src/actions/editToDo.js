import axios from 'axios';

export const editToDo = (dispatch, item, e) => {
	e.preventDefault();
	console.log(e);
	let input = {
		title: e.target.form[0].value,
		description: e.target.form[1].value,
		due_date: e.target.form[2].value,
		id: item.id,
		completed: item.completed,
	};
	console.log(input);
	axios
		.post('http://127.0.0.1:5000/edit-to-do', input)
		.then(function (response) {
			console.log(response);
			dispatch({ type: 'SET_TODO', payload: response.data });
		})
		.catch(function (error) {
			console.log(error);
		});
};
