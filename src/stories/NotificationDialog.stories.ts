import type { Meta, StoryObj } from '@storybook/react';
import NotificationDialog from '../components/NotificationDialog/NotificationDialog';

const meta: Meta<typeof NotificationDialog> = {
  title: 'Components/NotificationDialog',
  component: NotificationDialog,
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: { inline: false, height: '700px' },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotificationDialog>;

export const Caution: Story = {
  args: {
    open: true,
    type: 'error',
    title: 'Attention!',
    description: 'Something went wrong',
    actionText: 'Try again',
    handleClose: () => {},
    handleNextLocation: () => {},
  },
};

export const Success: Story = {
  args: {
    open: true,
    type: 'success',
    title: 'Congratulations!',
    description: 'Everything seems fine',
    actionText: 'Go to home page',
    handleClose: () => {},
    handleNextLocation: () => {},
  },
};
