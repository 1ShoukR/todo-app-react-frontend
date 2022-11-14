import axios from 'axios';

export const sendAccount = (dispatch, e) => {
	e.preventDefault();
	console.log(e);
	let input = {
		username: e.target.form[0].value,
		password: e.target.form[1].value,
	};
	axios
		.post('http://127.0.0.1:5000/sign-up', input)
		.then(function (response) {
			console.log(response);
			alert('You have created your account!');
		})
		.catch(function (error) {
			console.log(error);
			alert('Something went wrong. Please try again.');
		});
};
