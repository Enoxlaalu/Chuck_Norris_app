import { IReducerState } from 'src/redux/types';

const initialState = {
    randomJoke: '',
    categories: [],
    foundJokes: [],
    searchApplied: false
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
            const { jokesArray, searchApplied } = action.payload;
            return {
                ...state,
                foundJokes: jokesArray,
                searchApplied
            }
        }
        default: return state;
    }
};

export default rootReducer;