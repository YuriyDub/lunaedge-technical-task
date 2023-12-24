import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'default',
    required: false,
    error: false,
    disabled: false,
    helperText: 'this field is required',
    options: ['red', 'green', 'blue', 'purple', 'orange', 'yellow', 'white'],
  },
};

export const Invalid: Story = {
  args: {
    label: 'invalid',
    required: false,
    error: true,
    disabled: false,
    helperText: 'incorrect value',
    options: ['red', 'green', 'blue', 'purple', 'orange', 'yellow', 'white'],
  },
};

export const Disabled: Story = {
  args: {
    label: 'disabled',
    required: false,
    error: false,
    disabled: true,
    helperText: 'input is disabled',
    options: ['red', 'green', 'blue', 'purple', 'orange', 'yellow', 'white'],
  },
};
