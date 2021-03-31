import * as React from 'react';
import 'src/pages/ChuckNorrisAppPage/MainContent/styles.less';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import JokesList from 'src/pages/ChuckNorrisAppPage/MainContent/JokesList';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    getActiveCategorySelector,
    getJokesListSelector,
    getRandomJokeSelector,
    getSearchAppliedSelector
} from 'src/redux/selectors';
import { searchForJoke } from 'src/redux/actions';

const MainContent: React.FC = () => {
    const dispatch = useDispatch();
    const randomJoke = useSelector(getRandomJokeSelector);
    const jokesList = useSelector(getJokesListSelector);
    const searchApplied = useSelector(getSearchAppliedSelector);
    const activeCategory = useSelector(getActiveCategorySelector);

    const [inputValue, setInputValue] = React.useState('');
    const [error, showError] = React.useState('');

    const handleInputChange = (value) => setInputValue(value);

    const validateValue = () => {
        if (inputValue.length < 3 || inputValue.length > 120) {
            showError(
                'Search value must be more than 3 and less than 120 digits'
            );
        } else {
            showError('');
            return true;
        }
    };

    const makeSearch = value => dispatch(searchForJoke(value));

    const onSearchButtonClick = () => {
        validateValue() && makeSearch(inputValue);
    };

    const onCrossClick = () => {
        showError('');
        setInputValue('');
        makeSearch('');
    };

    const renderContent = () => {
        if (error) return <p className={'warning'}>{error}</p>;
        if (searchApplied) {
            if (jokesList.length) {
                return <JokesList jokesList={jokesList} />;
            } else {
                return (
                    <p>Sorry, no jokes for current query :( Try another one!</p>
                );
            }
        } else {
            return (
                <>
                    <h2>
                        Random Joke
                        {!activeCategory.includes('all')
                            ? ` from ${activeCategory.toUpperCase()} category`
                            : ''}
                        :
                    </h2>
                    {randomJoke}
                </>
            );
        }
    };

    return (
        <main className={'mainContent'}>
            <div className={'searchWrapper'}>
                <Input
                    onChange={handleInputChange}
                    placeholder={'Search for joke...'}
                    // value={inputValue}
                    // shows cross icon if there's some value in input
                    showCross={!!inputValue}
                    onCrossClick={onCrossClick}
                    applySearch={onSearchButtonClick}
                />
                <Button
                    text={'Search'}
                    onClick={onSearchButtonClick}
                />
            </div>
            <section className={'jokesWrapper'}>{renderContent()}</section>
        </main>
    );
};

export default MainContent;
