import { createSelector } from 'reselect';

const getState = state => state;

export const getRandomJokeSelector = createSelector(getState, data => data.randomJoke);

export const getCategoriesSelector = createSelector(getState, data => data.categories);

export const getFoundJokesSelector = createSelector(getState, data => data.foundJokes);