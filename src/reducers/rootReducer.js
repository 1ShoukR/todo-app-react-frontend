const initialState = {
	toDo: [],
};

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
    case 'SET_TODO':
        return {
        ...state,
        toDo:  action.payload,
        };
    case "REMOVE_TODO":
        return {
            ...state, 
            toDo: action.payload,
        }
    default: 
        return state
    }
}

export default rootReducer;
