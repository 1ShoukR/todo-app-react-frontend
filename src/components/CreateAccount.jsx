import React from 'react';
import { useDispatch } from 'react-redux';
import { sendAccount } from '../actions/sendAccount';

const CreateAccount = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<form>
				<div>
					<h1>create account</h1>
				</div>
				<div>
					<p>enter username</p>
					<input type="text" placeholder="create username" />
				</div>
				<div>
					<p>enter password</p>
					<input type="password" placeholder="create password" />
				</div>
				<div>
					<button onClick={(e) => sendAccount(dispatch, e)}>
						Create Account
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateAccount;
