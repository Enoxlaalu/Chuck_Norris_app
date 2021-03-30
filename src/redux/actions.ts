const makeRequest = async (url) => {
    const response = await fetch(url);
    return await response.json();
}

export const getRandomJoke = () => async dispatch => {
    try {
        const { value } = await makeRequest('https://api.chucknorris.io/jokes/random');

        dispatch({
            type: 'SET_RANDOM_JOKE',
            payload: value
        })
    } catch (e) {
        throw new Error(e);
    }
};

export const getCategories = () => async dispatch => {
    try {
        const categories = await makeRequest('https://api.chucknorris.io/jokes/categories');

        dispatch({
            type: 'SET_CATEGORIES',
            payload: categories
        })
    } catch (e) {
        throw new Error(e);
    }
};

export const getInitialData = () => dispatch => {
    dispatch(getRandomJoke());
    dispatch(getCategories());
}

export const searchForJoke = (value: string) => async dispatch => {
    let payload;

    if (value) {
        const { result } = await makeRequest(`https://api.chucknorris.io/jokes/search?query=${value}`);
        payload = {
            jokesArray: result.map(r => r.value),
            searchApplied: true
        };
    } else {
        payload = {
            jokesArray: [],
            searchApplied: false
        }
    }

    dispatch({
        type: 'SET_FOUND_JOKES',
        payload
    });
}