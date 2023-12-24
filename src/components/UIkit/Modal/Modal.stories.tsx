import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { Select } from '../Select/Select';
import { Input } from '../Input';

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    title: 'Default Modal',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
        <Input label="input" helperText="field is required" required />
        <Select
          label="select"
          options={['option-1', 'option-2', 'option-3', 'option-4', 'option-5', 'option-6']}
          helperText="choose your option"
        />
      </div>
    ),
  },
};
