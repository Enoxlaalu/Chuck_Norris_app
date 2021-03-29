import * as React from 'react';
import {
    getInitialData,
    searchForJoke
} from 'src/redux/actions';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import { getCategoriesSelector,
    getFoundJokesSelector,
    getRandomJokeSelector } from 'src/redux/selectors';
import MainContent
    from 'src/pages/components/MainContent';
import CategoriesPanel
    from 'src/pages/components/CategoriesPanel';

import './styles.less';

const ChuckNorrisAppContainer = () => {
    const dispatch = useDispatch();
    const randomJoke = useSelector(getRandomJokeSelector);
    const categories = useSelector(getCategoriesSelector);
    const foundJokes = useSelector(getFoundJokesSelector);

    React.useEffect(() => {
        dispatch(getInitialData());
    }, []);

    if (!randomJoke || !categories.length) return null;

    const makeSearch = value => dispatch(searchForJoke(value));

    return (
        <div className={'contentBody'}>
            <header>
                <h1>
                    Welcome to Chuck Norris Joke App
                </h1>
            </header>
            <CategoriesPanel
                categories={categories}
            />
            <MainContent
                randomJoke={randomJoke}
                makeSearch={makeSearch}
                foundJokes={foundJokes}
            />
        </div>
    )
};

export default ChuckNorrisAppContainer;