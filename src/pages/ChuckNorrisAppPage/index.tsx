import * as React from 'react';
import {
    setCategoriesPanelOpened
} from 'src/redux/actions';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    getCategoriesPanelOpenedSelector
} from 'src/redux/selectors';
import MainContent
    from 'src/pages/ChuckNorrisAppPage/MainContent';
import CategoriesPanel
    from 'src/pages/ChuckNorrisAppPage/CategoriesPanel';
import Hamburger
    from 'src/components/Hamburger';
import Loader
    from 'src/components/Loader';

import './styles.less';

const ChuckNorrisAppPage = () => {
    const dispatch = useDispatch();
    const categoriesPanelOpened = useSelector(getCategoriesPanelOpenedSelector);

    const toggleCategoriesPanel = () => dispatch(setCategoriesPanelOpened(!categoriesPanelOpened));

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
            <React.Suspense fallback={<Loader />}>
                <CategoriesPanel />
            </React.Suspense>
            <MainContent />
        </div>
    );
};

export default ChuckNorrisAppPage;