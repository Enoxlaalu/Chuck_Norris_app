import * as React from 'react';

import './styles.less';

interface IProps {
    onChange: (value: string) => void;
    placeholder: string;
    value?: string;
    showCross?: boolean;
    onCrossClick: () => void;
}

const Input: React.FC<IProps> = ({ onChange, placeholder, value, showCross, onCrossClick }) => {
    const [focused, setFocused] = React.useState(false);
    const [inputValue, setValue] = React.useState(value || '');

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    const handleChange = (e) => {
        const { value } = e.target;

        setValue(value);
        onChange && onChange(value);
    };

    const handleCrossClick = () => {
        setValue('');
        onCrossClick && onCrossClick();
    }

    return (
        <div
            className={`input ${focused ? 'focused' : ''}`}
        >
            <input
                type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder={placeholder}
                value={inputValue}
            />
            {
                showCross &&
                <span
                    className={'cross'}
                    onClick={handleCrossClick}
                />
            }
        </div>
    );
};

export default Input;