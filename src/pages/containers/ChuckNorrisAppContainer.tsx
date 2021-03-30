import * as React from 'react';
import {
    getInitialData,
    getRandomJoke,
    searchForJoke
} from 'src/redux/actions';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    getActiveCategorySelector,
    getCategoriesSelector,
    getJokesListSelector,
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
    const jokesList = useSelector(getJokesListSelector);
    const searchApplied = useSelector(getSearchAppliedSelector);
    const activeCategory = useSelector(getActiveCategorySelector);

    React.useEffect(() => {
        dispatch(getInitialData());
    }, []);

    if (!randomJoke || !categories.length) return null;

    const makeSearch = value => dispatch(searchForJoke(value));

    const setActiveCategory = category => dispatch(getRandomJoke(category));

    return (
        <div className={'contentBody'}>
            <header>
                <h1>
                    Welcome to Chuck Norris Jokes App
                </h1>
            </header>
            <CategoriesPanel
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />
            <MainContent
                randomJoke={randomJoke}
                makeSearch={makeSearch}
                jokesList={jokesList}
                searchApplied={searchApplied}
                activeCategory={activeCategory}
            />
        </div>
    )
};

export default ChuckNorrisAppContainer;