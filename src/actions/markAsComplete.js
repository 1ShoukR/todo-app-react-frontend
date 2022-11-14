import axios from 'axios';
import { setToDos } from './setToDos';
export const markAsComplete = (dispatch, item) => {
	axios
		.post('http://127.0.0.1:5000/mark-as-complete', item)
		.then(function (response) {
			console.log(response);
            dispatch({type: "SET_TODO", payload: response.data})
		})
		.catch(function (error) {
			console.log(error);
		});
};
