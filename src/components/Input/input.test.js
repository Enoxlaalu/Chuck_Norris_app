import React from 'react';
import Input from 'src/components/Input/index';

import { render, screen, fireEvent } from '@testing-library/react';

const setUp = (props) => render(<Input {...props} />);

describe('input test', () => {
    const placeholder = 'placeholder';
    const onChange = jest.fn();
    let component;
    let input;

    beforeEach(() => {
        component = setUp({ value: 'valueTest', onChange, placeholder });
        input = screen.getByPlaceholderText(placeholder);
    });

    it('should render input component', () => {
        expect(input).toHaveAttribute('value', 'valueTest');
    });

    it('should focus on click', () => {
        const input = screen.getByPlaceholderText('placeholder');
        fireEvent.focus(input);
        expect(component.container.firstChild).toHaveClass('focused');
        fireEvent.blur(input);
        expect(component.container.firstChild).not.toHaveClass('focused');
    });

    it('should change on typing', () => {
        fireEvent.change(input, { target: { value: 'text' } });
        expect(input).toHaveAttribute('value', 'text');
        expect(onChange).toHaveBeenCalled();
    });
});