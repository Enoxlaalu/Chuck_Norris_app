import * as React from 'react';

import 'src/pages/ChuckNorrisAppPage/CategoriesPanel/styles.less';
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

const CategoriesPanel: React.FC = () => {
    const dispatch = useDispatch();
    const categories = useSelector(getCategoriesSelector);
    const activeCategory = useSelector(getActiveCategorySelector);
    const categoriesPanelOpened = useSelector(getCategoriesPanelOpenedSelector);

    React.useEffect(() => {
        dispatch(getCategories());
    }, []);

    const setActiveCategory = category => {
        if (categoriesPanelOpened) {
            dispatch(setCategoriesPanelOpened(false));
        }
        dispatch(getRandomJoke(category));
    };

    return (
        <aside
            className={`categoriesPanel ${
                categoriesPanelOpened ? 'opened' : ''
            }`}
        >
            <h3>Choose category:</h3>
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
        </aside>
    );
};
export default CategoriesPanel;
