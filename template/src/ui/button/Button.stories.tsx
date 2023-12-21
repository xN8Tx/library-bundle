import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    children: 'Welcome to ts-rlb',
    color: 'primary',
    onClick: () => console.log('Hello world!'),
  },
};

export const Medium: Story = {
  args: {
    children: 'Welcome to ts-rlb',
    color: 'primary',
    onClick: () => console.log('Hello world!'),
  },
};

export const Small: Story = {
  args: {
    children: 'Welcome to ts-rlb',
    color: 'primary',
    onClick: () => console.log('Hello world!'),
  },
};
