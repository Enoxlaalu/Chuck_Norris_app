import { createSelector } from 'reselect';

const getState = state => state;

export const getRandomJokeSelector = createSelector(getState, data => data.randomJoke);

export const getCategoriesSelector = createSelector(getState, data => data.categories);

export const getJokesListSelector = createSelector(getState, data => data.jokesList);

export const getSearchAppliedSelector = createSelector(getState, data => data.searchApplied);

export const getActiveCategorySelector = createSelector(getState, data => data.activeCategory);