import * as React from 'react';
import { IReducerState } from 'src/redux/types';

import 'src/pages/ChuckNorrisAppPage/MainContent/jokesList.less';

const JokesList: React.FC<Partial<IReducerState>> = ({ jokesList }) => {
    console.log('rendering list');

    return (
        <ol className={'jokesList'}>
            {
                jokesList.map(joke => {
                    return (
                        <li
                            key={joke.id}
                        >
                            {joke.value}
                        </li>
                    );
                })
            }
        </ol>
    );
};

export default JokesList;