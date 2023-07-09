import type { Meta, StoryObj } from "@storybook/react";
import TextField from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Example/TextField",
    component: TextField,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Outlined: Story = {
    args: {
        variant: "outlined",
        placeholder: "outlined",
    },
};

export const Filled: Story = {
    args: {
        variant: "filled",
        placeholder: "filled",
    },
};

export const Standard: Story = {
    args: {
        variant: "standard",
        placeholder: "standard",
    },
};
