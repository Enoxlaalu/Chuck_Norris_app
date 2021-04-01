import { createSelector } from 'reselect';

const getState = state => state;

export const getRandomJokeSelector = createSelector(getState, data => data.randomJoke);

export const getCategoriesSelector = createSelector(getState, data => data.categories);

export const getJokesListSelector = createSelector(getState, data => data.jokesList);

export const getSearchAppliedSelector = createSelector(getState, data => data.searchApplied);

export const getActiveCategorySelector = createSelector(getState, data => data.activeCategory);

export const getCategoriesPanelOpenedSelector = createSelector(getState, data => data.categoriesPanelOpened);

export const getErrorSelector = createSelector(getState, data => data.error);

export const getInputValueSelector = createSelector(getState, data => data.inputValue);

export const getJokesLoadingSelector = createSelector(getState, data => data.jokesLoading);