import type { Meta, StoryObj } from '@storybook/react';
import Chip from '../components/Chip/Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Filled: Story = {
  args: {
    title: 'Filled chip',
    type: 'filled',
    color: 'green',
    textColor: 'white',
    width: 200,
  },
};

export const Outlined: Story = {
  args: {
    title: 'Outlined chip',
    type: 'outlined',
    color: 'red',
    width: 200,
  },
};
