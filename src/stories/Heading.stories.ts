import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '../ui/Heading';

const meta = {
  title: 'UI/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    children: 'Messages',
    size: 'large',
    color: 'primary',
  },
};

export const Medium: Story = {
  args: {
    children: 'Messages',
    size: 'medium',
    color: 'primary',
  },
};

export const Small: Story = {
  args: {
    children: 'Messages',
    size: 'small',
    color: 'primary',
  },
};
