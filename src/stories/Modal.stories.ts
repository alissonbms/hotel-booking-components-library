import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../components/Modal/Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: { inline: false, height: '380px' },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    open: true,
    btnConfirmText: 'Confirm',
    btnCancelText: 'Cancel',
    handleConfirm: () => {},
    handleCancel: () => {},
    width: 500,
    height: 300,
  },
};
