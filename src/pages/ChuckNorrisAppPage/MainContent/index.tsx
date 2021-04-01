import * as React from 'react';
import 'src/pages/ChuckNorrisAppPage/MainContent/styles.less';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    getInputValueSelector,
} from 'src/redux/selectors';
import {
    clearContent,
    getRandomJoke,
    searchForJoke,
    setInputValue,
    showError
} from 'src/redux/actions';
import JokesSection
    from 'src/pages/ChuckNorrisAppPage/MainContent/JokesSection';

const MainContent: React.FC = () => {
    const dispatch = useDispatch();
    const inputValue = useSelector(getInputValueSelector);

    console.log('rendering content');

    React.useEffect(() => {
        dispatch(getRandomJoke());
    }, []);

    const handleInputChange = (value) => dispatch(setInputValue(value));

    const validateValue = () => {
        if (inputValue.length < 3 || inputValue.length > 120) {
            dispatch(showError(
                'Search value must be more than 3 and less than 120 digits'
            ));
        } else {
            dispatch(showError(''));
            return true;
        }
    };

    const makeSearch = () => dispatch(searchForJoke(inputValue));

    const onSearchButtonClick = () => {
        validateValue() && makeSearch();
    };

    const onCrossClick = () => dispatch(clearContent);

    return (
        <main className={'mainContent'}>
            <div className={'searchWrapper'}>
                <Input
                    onBlur={handleInputChange}
                    placeholder={'Search for joke...'}
                    value={inputValue}
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
            <section className={'jokesWrapper'}>
                <JokesSection />
            </section>
        </main>
    );
};

export default MainContent;
