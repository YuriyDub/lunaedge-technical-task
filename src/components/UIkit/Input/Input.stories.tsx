import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'default',
    required: false,
    error: false,
    disabled: false,
    helperText: 'this field is required',
  },
};

export const Invalid: Story = {
  args: {
    label: 'invalid',
    required: false,
    error: true,
    disabled: false,
    helperText: 'incorrect value',
  },
};

export const Disabled: Story = {
  args: {
    label: 'disabled',
    required: false,
    error: false,
    disabled: true,
    helperText: 'input is disabled',
  },
};
