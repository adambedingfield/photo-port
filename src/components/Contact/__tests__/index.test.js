import React from 'react';
import { render, cleanup, getAllByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
//import Contact from '..';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact is rendering', () => {
    it('renders', () => {
        render(<ContactForm />);
    });
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot();
    })
})