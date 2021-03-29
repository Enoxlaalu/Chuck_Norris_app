import * as React from 'react';
import { IReducerState } from 'src/redux/types';

import './styles.less';

const CategoriesPanel: React.FC<Partial<IReducerState>> = ({ categories }) => {
    return (
        <aside className={'categoriesPanel'}>
            <ul>
                {
                    categories.map(category => {
                        return (
                            <li key={category}>
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