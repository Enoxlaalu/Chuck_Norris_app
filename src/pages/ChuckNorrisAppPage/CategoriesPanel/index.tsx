import * as React from 'react';

import 'src/pages/ChuckNorrisAppPage/CategoriesPanel/styles.less';
import {
    useSelector
} from 'react-redux';
import {
    getCategoriesPanelOpenedSelector
} from 'src/redux/selectors';
import CategoriesList
    from 'src/pages/ChuckNorrisAppPage/CategoriesPanel/CategoriesList';

const CategoriesPanel: React.FC = () => {
    const categoriesPanelOpened = useSelector(getCategoriesPanelOpenedSelector);

    console.log('rendering categories');

    return (
        <aside
            className={`categoriesPanel ${
                categoriesPanelOpened ? 'opened' : ''
            }`}
        >
            <h3>Choose category:</h3>
            <CategoriesList />
        </aside>
    );
};
export default CategoriesPanel;
