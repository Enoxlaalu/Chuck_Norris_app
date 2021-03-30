import * as React from 'react';
import {
    getInitialData,
    searchForJoke
} from 'src/redux/actions';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    getCategoriesSelector,
    getFoundJokesSelector,
    getRandomJokeSelector,
    getSearchAppliedSelector
} from 'src/redux/selectors';
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
    const searchApplied = useSelector(getSearchAppliedSelector);

    React.useEffect(() => {
        dispatch(getInitialData());
    }, []);

    if (!randomJoke || !categories.length) return null;

    const makeSearch = (value, searchApplied) => dispatch(searchForJoke(value, searchApplied));

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
                searchApplied={searchApplied}
            />
        </div>
    )
};

export default ChuckNorrisAppContainer;