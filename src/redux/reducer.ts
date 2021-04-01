import { IReducerState } from 'src/redux/types';

const initialState = {
    randomJoke: '',
    categories: [],
    jokesList: [],
    searchApplied: false,
    activeCategory: 'all categories',
    error: ''
};

const rootReducer = (state: IReducerState = initialState, action) => {
    switch (action.type) {
        case 'SET_RANDOM_JOKE': {
            const { randomJoke, category } = action.payload;

            return {
                ...state,
                randomJoke,
                activeCategory: category ? category : initialState.activeCategory,
                error: ''
            };
        }
        case 'SET_CATEGORIES': {
            return {
                ...state,
                categories: action.payload
            };
        }
        case 'SET_FOUND_JOKES': {
            const { jokesArray, searchApplied } = action.payload;

            return {
                ...state,
                jokesList: jokesArray,
                searchApplied,
                activeCategory: initialState.activeCategory,
                error: ''
            };
        }
        case 'SET_CATEGORIES_PANEL_OPENED': {
            return {
                ...state,
                categoriesPanelOpened: action.payload
            };
        }
        case 'SHOW_ERROR': {
            return {
                ...state,
                error: action.payload
            };
        }
        default: return state;
    }
};

export default rootReducer;