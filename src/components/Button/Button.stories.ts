import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { Appearance, Size } from '../../design/types';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'General/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    appearance: Appearance.SECONDARY,
    label: 'Button',
  },
};

export const Danger: Story = {
  args: {
    appearance: Appearance.DANGER,
    label: 'Danger',
  }
};

export const Medium: Story = {
  args: {
    size: Size.MEDIUM,
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: Size.LARGE,
    label: 'Button',
  },
};


