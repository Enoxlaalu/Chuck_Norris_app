import React from 'react';
import Button from 'src/components/Button/index.tsx';

import { render } from '@testing-library/react';

const setUp = (props) => render(<Button {...props} />);

describe('button test', () => {
    let component;

    beforeEach(() => {
        component = setUp();
    });

    it('should render button component', () => {
        component = setUp({ text: 'test' });
        expect(component.getByText('test')).toBeInTheDocument();
    });

    it('should render className', () => {
        const className = 'testButton';
        component = setUp({ text: 'test', className });

        expect(component.getByText('test')).toHaveClass(className);
    });
});