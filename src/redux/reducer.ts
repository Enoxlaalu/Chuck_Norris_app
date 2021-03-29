import { IReducerState } from 'src/redux/types';

const initialState = {
    randomJoke: '',
    categories: [],
    foundJokes: []
};

const rootReducer = (state: IReducerState = initialState, action) => {
    switch (action.type) {
        case 'SET_RANDOM_JOKE': {
            return {
                ...state,
                randomJoke: action.payload
            }
        }
        case 'SET_CATEGORIES': {
            return {
                ...state,
                categories: action.payload
            }
        }
        case 'SET_FOUND_JOKES': {
            return {
                ...state,
                foundJokes: action.payload
            }
        }
        default: return state;
    }
};

export default rootReducer;