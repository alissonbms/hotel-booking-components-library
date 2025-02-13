import type { Meta, StoryObj } from '@storybook/react';
import Input from '../components/Input/Input';

const meta: Meta<typeof Input> = {
  title: 'Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your name',
    type: 'text',
  },
};

export const WithIcon: Story = {
  args: {
    labelText: 'Name',
    labelId: 'name',
    icon: 'https://img.icons8.com/?size=100&id=12082&format=png&color=000000',
    iconPosition: 'left',
    iconSize: 32,
    type: 'text',
  },
};

export const WithLabel: Story = {
  args: {
    labelText: 'Name',
    labelId: 'name',
    type: 'text',
  },
};
