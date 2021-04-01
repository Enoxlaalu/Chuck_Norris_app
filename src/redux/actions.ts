import { IReducerState } from 'src/redux/types';

export const setJokesLoading = ({
    type: 'SET_JOKES_LOADING'
});

const makeRequest = async (url: string) => {
    const response = await fetch(url);
    return await response.json();
};

export const getRandomJoke = (category?: Pick<IReducerState, 'activeCategory'>) => async dispatch => {
    dispatch(setJokesLoading);

    try {
        const { value } = await makeRequest(`https://api.chucknorris.io/jokes/random${category ? `?category=${category}` : ''}`);

        dispatch({
            type: 'SET_RANDOM_JOKE',
            payload: {
                randomJoke: value,
                category
            }
        });
    } catch (e) {
        throw new Error(e);
    }
};

export const getCategories = () => async dispatch => {
    try {
        const categories = await makeRequest('https://api.chucknorris.io/jokes/categories');

        dispatch({
            type: 'SET_CATEGORIES',
            payload: ['all categories', ...categories]
        });
    } catch (e) {
        throw new Error(e);
    }
};

export const searchForJoke = (value: string) => async dispatch => {
    dispatch(setJokesLoading);

    const { result } = await makeRequest(`https://api.chucknorris.io/jokes/search?query=${value}`);
    const payload = {
        jokesArray: result,
        searchApplied: true
    };

    dispatch({
        type: 'SET_FOUND_JOKES',
        payload
    });
};

export const setCategoriesPanelOpened = (opened: boolean) => ({
    type: 'SET_CATEGORIES_PANEL_OPENED',
    payload: opened
});

export const showError = (value: string) => ({
    type: 'SHOW_ERROR',
    payload: value
});

export const setInputValue = (value: string) => ({
    type: 'SET_INPUT_VALUE',
    payload: value
});

export const clearContent = ({
    type: 'CLEAR_CONTENT'
});