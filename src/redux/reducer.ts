import { IReducerState } from 'src/redux/types';

const initialState = {
    randomJoke: '',
    categories: [],
    jokesList: [],
    searchApplied: false,
    activeCategory: 'all categories'
};

const rootReducer = (state: IReducerState = initialState, action) => {
    switch (action.type) {
        case 'SET_RANDOM_JOKE': {
            const { randomJoke, category } = action.payload;

            return {
                ...state,
                randomJoke,
                activeCategory: category ? category : initialState.activeCategory
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
                jokesList: jokesArray,
                searchApplied,
                activeCategory: initialState.activeCategory
            }
        }
        case 'SET_CATEGORIES_PANEL_OPENED': {
            return {
                ...state,
                categoriesPanelOpened: action.payload
            }
        }
        default: return state;
    }
};

export default rootReducer;