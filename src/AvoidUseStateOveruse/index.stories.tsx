import { Meta, StoryObj } from "@storybook/react";
import Component from ".";

const meta = {
  title: "ステートだからと useState を乱用するな",
  component: Component,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
