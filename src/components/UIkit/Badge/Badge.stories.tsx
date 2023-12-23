import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Rounded: Story = {
  args: {
    variant: 'rounded',
    children: 'Rounded Badge',
    isDeletable: true,
  },
};

export const Squared: Story = {
  args: {
    variant: 'squared',
    children: 'Squared Badge',
    isDeletable: true,
  },
};
