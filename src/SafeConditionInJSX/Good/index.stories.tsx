import type { Meta, StoryObj } from '@storybook/react';
import Component from '.';

const meta = {
  title: 'JSX内の条件分岐は気をつけろ',
  component: Component,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Good: Story = {
  args: {},
};
