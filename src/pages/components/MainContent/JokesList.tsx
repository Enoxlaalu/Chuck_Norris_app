import * as React from 'react';
import { IReducerState } from 'src/redux/types';

import './jokesList.less';

const JokesList: React.FC<Partial<IReducerState>> = ({ jokesList }) => {
    return (
        <ol className={'jokesList'}>
            {
                jokesList.map(joke => {
                    return (
                        <li>
                            {joke}
                        </li>
                    );
                })
            }
        </ol>
    );
};

export default JokesList;