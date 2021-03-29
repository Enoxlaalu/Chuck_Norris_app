import * as React from 'react';

import './styles.less';

interface IProps {
    text: string;
    className: string;
    onClick: () => void
}

const Button: React.FC<IProps> = ({ text, className, onClick }) => {
    return (
        <button
            className={`button ${className ? className : ''}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;