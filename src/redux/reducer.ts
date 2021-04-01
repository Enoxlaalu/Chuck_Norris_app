import { IReducerState } from 'src/redux/types';

const initialState = {
    randomJoke: '',
    categories: null,
    jokesList: [],
    searchApplied: false,
    activeCategory: 'all categories',
    error: '',
    inputValue: '',
    jokesLoading: false
};

const rootReducer = (state: IReducerState = initialState, action) => {
    switch (action.type) {
        case 'SET_RANDOM_JOKE': {
            const { randomJoke, category } = action.payload;

            return {
                ...state,
                randomJoke,
                // if no category passed - show 'all categories'
                activeCategory: category ? category : initialState.activeCategory,
                error: '',
                jokesList: [],
                searchApplied: false,
                inputValue: '',
                jokesLoading: false
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
                error: '',
                jokesLoading: false
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
        case 'SET_INPUT_VALUE': {
            return {
                ...state,
                inputValue: action.payload
            };
        }
        case 'CLEAR_CONTENT': {
            return {
                ...state,
                inputValue: '',
                jokesList: [],
                searchApplied: false
            };
        }
        case 'SET_JOKES_LOADING': {
            return {
                ...state,
                jokesLoading: true
            };
        }
        default: return state;
    }
};

export default rootReducer;