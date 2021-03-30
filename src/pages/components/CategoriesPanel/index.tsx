import * as React from 'react';
import { IReducerState } from 'src/redux/types';

import './styles.less';

type TProps = {
    setActiveCategory: (category: string) => void;
    categoriesPanelOpened: boolean;
} & Partial<IReducerState>;

const CategoriesPanel: React.FC<TProps> = ({ categories, setActiveCategory, activeCategory, categoriesPanelOpened }) => {
    return (
        <div className={'panelWrapper'}>
            <aside className={`categoriesPanel ${categoriesPanelOpened ? 'opened' : ''}`}>
                <h3>Choose category:</h3>
                <ul>
                    {
                        categories.map(category => {
                            return (
                                <li
                                    key={category}
                                    className={activeCategory === category ? 'active' : ''}
                                    onClick={() => setActiveCategory(category.includes('all') ? '' : category)}
                                >
                                    {category}
                                </li>
                            )
                        })
                    }
                </ul>
            </aside>
        </div>
    );
}
export default CategoriesPanel;