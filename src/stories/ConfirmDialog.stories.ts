import type { Meta, StoryObj } from '@storybook/react';
import ConfirmDialog from '../components/ConfirmDialog/ConfirmDialog';

const meta: Meta<typeof ConfirmDialog> = {
  title: 'Components/ConfirmDialog',
  component: ConfirmDialog,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ConfirmDialog>;

export const Caution: Story = {
  args: {
    open: true,
    type: 'error',
    title: 'Attention!',
    description: 'This action is irreversible',
    btnConfirmText: 'Confirm',
    btnCancelText: 'Cancel',
    handleConfirm: () => {},
    handleCancel: () => {},
  },
};

export const Success: Story = {
  args: {
    open: true,
    type: 'success',
    title: 'Congratulations!',
    description: 'Everything seems fine',
    btnConfirmText: 'Confirm',
    btnCancelText: 'Cancel',
    handleConfirm: () => {},
    handleCancel: () => {},
  },
};
