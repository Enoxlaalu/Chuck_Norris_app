import { IReducerState } from 'src/redux/types';

const makeRequest = async (url: string) => {
    const response = await fetch(url);
    return await response.json();
};

export const getRandomJoke = (category?: Pick<IReducerState, 'activeCategory'>) => async dispatch => {
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
    let payload;

    if (value) {
        const { result } = await makeRequest(`https://api.chucknorris.io/jokes/search?query=${value}`);
        payload = {
            jokesArray: result,
            searchApplied: true
        };
    } else {
        payload = {
            jokesArray: [],
            searchApplied: false
        };
    }

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