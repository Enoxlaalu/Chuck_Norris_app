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

const MainContent: React.FC<TProps> = ({ randomJoke, makeSearch, foundJokes, searchApplied }) => {
    const [ inputValue, setInputValue ] = React.useState('');
    const [ error, showError ] = React.useState('');

    const handleInputChange = value => setInputValue(value);

    const validateValue = () => {
        if (inputValue.length < 3 || inputValue.length > 120) {
            showError('Search value must be more than 3 and less than 120 digits');
        } else {
            showError('');
            return true;
        }
    }

    const onSearchButtonClick = () => {
        validateValue() && makeSearch(inputValue);
    }

    const onCrossClick = () => {
        showError('');
        setInputValue('');
        makeSearch('');
    }

    const renderContent = () => {
        if (error) return <p className={'warning'}>{error}</p>;
        if (searchApplied) {
            if (foundJokes.length) {
                return foundJokes.map(joke => {
                    return (
                        <p>
                            {joke}
                        </p>
                    );
                });
            } else {
                return <p>
                    Sorry, no jokes for current query :( Try another one!
                </p>;
            }
        } else {
            return <>
                <h2>Random Joke:</h2>
                {randomJoke}
            </>
        }
    }

    return <main className={'mainContent'}>
        <div className={'searchWrapper'}>
            <Input
                onChange={handleInputChange}
                placeholder={'Search for joke...'}
                // value={inputValue}
                // shows cross icon if there's some value in input
                showCross={!!inputValue}
                onCrossClick={onCrossClick}
            />
            <Button
                text={'Search'}
                // className={}
                onClick={onSearchButtonClick}
            />
        </div>
        { renderContent() }
    </main>;
};

export default MainContent;
