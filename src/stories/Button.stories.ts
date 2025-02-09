import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'Form/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Rounded: Story = {
  args: {
    title: 'Rounded button',
    children: 'Rounded button',
    variant: 'rounded',
    colors: 'orange',
    width: 300,
  },
};

export const Normal: Story = {
  args: {
    title: 'Normal button',
    children: 'Normal button',
    variant: 'normal',
    colors: 'orange__outline',
    width: 300,
  },
};

export const White: Story = {
  args: {
    title: 'White button',
    children: 'White button',
    variant: 'rounded',
    colors: 'white',
    width: 300,
  },
};
