import React from 'react';

import { cleanup, render, screen } from '@testing-library/react';

import Heading from './Heading';

describe('Heading', () => {
  afterEach(() => cleanup());
  test('Should render', () => {
    render(
      <Heading color='primary' size='large'>
        Hello world!
      </Heading>,
    );

    const button = screen.getByText('Hello world!');

    expect(button).toBeInTheDocument();
  });

  test('Snapshot', () => {
    render(
      <Heading color='primary' size='large'>
        Hello world!
      </Heading>,
    );

    const button = screen.getByText('Hello world!');

    expect(button).toMatchSnapshot();
  });
});
