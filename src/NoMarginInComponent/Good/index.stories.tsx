import type { Meta, StoryObj } from '@storybook/react';
import Component from '.';

const meta = {
  title: 'コンポーネントにmarginを持たせるな',
  component: Component,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Good: Story = {
  args: {},
};