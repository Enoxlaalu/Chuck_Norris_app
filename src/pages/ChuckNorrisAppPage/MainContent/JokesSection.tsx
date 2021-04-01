import * as React from 'react';
import JokesList from 'src/pages/ChuckNorrisAppPage/MainContent/JokesList';
import { useSelector } from 'react-redux';
import {
    getActiveCategorySelector,
    getErrorSelector,
    getJokesListSelector,
    getJokesLoadingSelector,
    getRandomJokeSelector,
    getSearchAppliedSelector,
} from 'src/redux/selectors';
import Loader
    from 'src/components/Loader';

// using memo to prevent render on input blur
const JokesSection: React.FC = React.memo(() => {
    const randomJoke = useSelector(getRandomJokeSelector);
    const jokesList = useSelector(getJokesListSelector);
    const searchApplied = useSelector(getSearchAppliedSelector);
    const activeCategory = useSelector(getActiveCategorySelector);
    const error = useSelector(getErrorSelector);
    const jokesLoading = useSelector(getJokesLoadingSelector);

    console.log('rendering section');

    if (jokesLoading) return <Loader />;

    if (error) return <p className={'warning'}>{error}</p>;

    if (searchApplied) {
        if (jokesList.length) {
            return <JokesList jokesList={jokesList} />;
        } else {
            return <p>Sorry, no jokes for current query :( Try another one!</p>;
        }
    } else {
        return (
            <>
                <h2>
                    Random Joke
                    {!activeCategory.includes('all')
                        ? ` from ${activeCategory.toUpperCase()} category`
                        : ''}
                    :
                </h2>
                {randomJoke}
            </>
        );
    }
});

export default JokesSection;
