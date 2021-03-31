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
import Hamburger
    from 'src/components/Hamburger';

import './styles.less';

const ChuckNorrisAppContainer = () => {
    const dispatch = useDispatch();
    const randomJoke = useSelector(getRandomJokeSelector);
    const categories = useSelector(getCategoriesSelector);
    const jokesList = useSelector(getJokesListSelector);
    const searchApplied = useSelector(getSearchAppliedSelector);
    const activeCategory = useSelector(getActiveCategorySelector);
    const [categoriesPanelOpened, setCategoriesPanelOpened] = React.useState(false);

    React.useEffect(() => {
        dispatch(getInitialData());
    }, []);

    if (!randomJoke || !categories.length) return null;

    const makeSearch = value => dispatch(searchForJoke(value));

    const setActiveCategory = category => {
        if (categoriesPanelOpened) {
            setCategoriesPanelOpened(false);
        }
        dispatch(getRandomJoke(category));
    };

    const toggleCategoriesPanel = () => setCategoriesPanelOpened(!categoriesPanelOpened);

    return (
        <div className={'contentBody'}>
            <header>
                <Hamburger
                    width={40}
                    height={40}
                    onClick={toggleCategoriesPanel}
                    active={categoriesPanelOpened}
                />
                <h1>
                    Chuck Norris Jokes App
                </h1>
            </header>
            <CategoriesPanel
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
                categoriesPanelOpened={categoriesPanelOpened}
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