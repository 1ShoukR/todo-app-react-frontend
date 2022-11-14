import axios from 'axios';

export const removeToDo = (dispatch, item) => {
	axios
		.post('http://127.0.0.1:5000/delete-to-do', item)
		.then(function (response) {
			console.log(response);
			dispatch({ type: 'REMOVE_TODO', payload: response.data });
		})
		.catch(function (error) {
			console.log(error);
		});
};
