import axios from 'axios';

export const moveRight = (dispatch, item, e, globalData) => {
	e.preventDefault();
	console.log(item);
	console.log('this is global', globalData);
	let input = {
		title: item.title,
		description: item.description,
		due_date: item.due_date,
		id: item.id,
		completed: item.completed,
		order_of_to_do: globalData.map((data) => {
			return data.order_of_to_do;
		}),
	};
	axios
		.post('http://127.0.0.1:5000/re-order-down', input)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
			alert('Something went wrong. Please try again.');
		});
};
