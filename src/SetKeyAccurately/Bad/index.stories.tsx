import type { Meta, StoryObj } from '@storybook/react';
import Component from '.';

const meta = {
  title: 'key は正しく指定しろ',
  component: Component,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bad: Story = {
  args: {},
};
