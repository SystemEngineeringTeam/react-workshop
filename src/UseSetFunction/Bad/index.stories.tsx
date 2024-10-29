import type { Meta, StoryObj } from '@storybook/react';
import Component from '.';

const meta = {
  title: 'ステートの更新はset関数を使え',
  component: Component,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bad: Story = {
  args: {},
};
