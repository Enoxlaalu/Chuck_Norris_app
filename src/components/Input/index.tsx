import * as React from 'react';

import './styles.less';

interface IProps {
    onChange?: (value: string) => void;
    onBlur?: (value: string) => void;
    placeholder: string;
    value?: string;
    showCross?: boolean;
    onCrossClick?: () => void;
    applySearch?: () => void;
}

const Input: React.FC<IProps> = ({
    onChange,
    placeholder,
    value,
    showCross,
    onCrossClick,
    applySearch,
    onBlur
}) => {
    const [focused, setFocused] = React.useState(false);
    const [inputValue, setValue] = React.useState(value || '');

    React.useEffect(() => {
        setValue(value);
    }, [value]);

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = (e) => {
        const { value } = e.target;

        setFocused(false);

        onBlur && onBlur(value);
    };

    const handleChange = (e) => {
        const { value } = e.target;

        setValue(value);
        onChange && onChange(value);
    };

    const handleCrossClick = () => {
        setValue('');
        onCrossClick && onCrossClick();
    };

    const handleKeyDown = (e) => {
        if (e.code === 'Enter' && applySearch) {
            applySearch();
        }
    };

    return (
        <div className={`input ${focused ? 'focused' : ''}`}>
            <input
                type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                value={inputValue}
            />
            {showCross && (
                <span className={'cross'} onClick={handleCrossClick} />
            )}
        </div>
    );
};

export default Input;