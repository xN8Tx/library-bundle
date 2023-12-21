import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  afterEach(() => cleanup());

  test('Should render', () => {
    render(
      <Button color='primary' onClick={() => {}}>
        Hello world!
      </Button>,
    );

    const button = screen.getByText('Hello world!');

    expect(button).toBeInTheDocument();
  });

  test('Should click', () => {
    const onClick = jest.fn();
    render(
      <Button color='primary' onClick={onClick}>
        Hello world!
      </Button>,
    );

    const button = screen.getByText('Hello world!');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  test('Should not click', () => {
    const onClick = jest.fn();
    render(
      <Button color='primary' onClick={onClick} disabled={true}>
        Hello world!
      </Button>,
    );

    const button = screen.getByText('Hello world!');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test('Snapshot', () => {
    render(
      <Button color='primary' onClick={() => {}}>
        Hello world!
      </Button>,
    );

    const button = screen.getByText('Hello world!');

    expect(button).toMatchSnapshot();
  });
});
