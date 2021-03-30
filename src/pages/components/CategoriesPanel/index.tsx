import * as React from 'react';
import { IReducerState } from 'src/redux/types';

import './styles.less';

type TProps = {
    setActiveCategory: (category: string) => void
} & Partial<IReducerState>;

const CategoriesPanel: React.FC<TProps> = ({ categories, setActiveCategory, activeCategory }) => {
    return (
        <aside className={'categoriesPanel'}>
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
    );
}
export default CategoriesPanel;