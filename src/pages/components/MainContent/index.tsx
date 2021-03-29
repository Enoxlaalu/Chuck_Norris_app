import * as React from 'react';
import { IReducerState } from 'src/redux/types';

import './styles.less';
import Input
    from 'src/components/Input';
import Button
    from 'src/components/Button';

type TProps = Partial<IReducerState> & {
    makeSearch: (value: string) => void
}

const MainContent: React.FC<TProps> = ({ randomJoke, makeSearch, foundJokes }) => {
    const [ inputValue, setInputValue ] = React.useState('');

    const handleInputChange = (value) => {
        setInputValue(value);
    }

    const onSearchButtonClick = () => makeSearch(inputValue);

    return <main className={'mainContent'}>
        <div>
            <Input
                onChange={handleInputChange}
                placeholder={'Search for joke...'}
                value={inputValue}
            />
            <Button
                text={'Search'}
                // className={}
                onClick={onSearchButtonClick}
            />
        </div>
        <h2>Random Joke:</h2>
        {randomJoke}
    </main>;
};

export default MainContent;
