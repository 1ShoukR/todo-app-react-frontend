


export const addToDo = (dispatch, response) => {
	dispatch({ type: 'SET_TODO', payload: response.data });
};
