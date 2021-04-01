import * as React from 'react';
import 'src/pages/ChuckNorrisAppPage/MainContent/styles.less';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    getCategoriesPanelOpenedSelector,
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

const MIN_LENGTH = 3;
const MAX_LENGTH = 120;

const MainContent: React.FC = () => {
    const dispatch = useDispatch();
    const inputValue = useSelector(getInputValueSelector);
    const categoriesPanelOpened = useSelector(getCategoriesPanelOpenedSelector);

    console.log('rendering content');

    React.useEffect(() => {
        dispatch(getRandomJoke());
    }, []);

    const handleInputChange = (value) => dispatch(setInputValue(value));

    // Chuck Norris Api responses error if query length is incorrect
    // if validation fails - do not send request, but show warning
    const validateValue = () => {
        if (inputValue.length < MIN_LENGTH || inputValue.length > MAX_LENGTH) {
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
        <main className={`mainContent ${categoriesPanelOpened ? 'disabled' : ''}`}>
            <div className={'searchWrapper'}>
                <Input
                    onChange={handleInputChange}
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
