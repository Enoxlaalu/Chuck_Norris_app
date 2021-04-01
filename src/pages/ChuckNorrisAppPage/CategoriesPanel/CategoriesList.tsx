import * as React from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    getActiveCategorySelector,
    getCategoriesPanelOpenedSelector,
    getCategoriesSelector
} from 'src/redux/selectors';
import {
    getCategories,
    getRandomJoke,
    setCategoriesPanelOpened
} from 'src/redux/actions';
import Loader
    from 'src/components/Loader';

const CategoriesList: React.FC = () => {
    const dispatch = useDispatch();
    const categoriesPanelOpened = useSelector(getCategoriesPanelOpenedSelector);
    const categories = useSelector(getCategoriesSelector);
    const activeCategory = useSelector(getActiveCategorySelector);

    console.log('rendering categories list');

    const setActiveCategory = category => {
        if (categoriesPanelOpened) {
            dispatch(setCategoriesPanelOpened(false));
        }
        dispatch(getRandomJoke(category));
    };

    React.useEffect(() => {
        dispatch(getCategories());
    }, []);

    if (!categories) return <Loader />;

    return (
        <ul>
            {categories.map((category) => {
                return (
                    <li
                        key={category}
                        className={
                            activeCategory === category ? 'active' : ''
                        }
                        onClick={() =>
                            setActiveCategory(
                                category.includes('all') ? '' : category
                            )
                        }
                    >
                        {category}
                    </li>
                );
            })}
        </ul>
    );
};

export default CategoriesList;