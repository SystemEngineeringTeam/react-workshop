import type { Meta, StoryObj } from '@storybook/react';
import Component from '.';

const meta = {
  title: '現在のステートを元にステートを更新するなら callback を使え',
  component: Component,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bad: Story = {
  args: {},
};
