import type { Meta, StoryObj } from "@storybook/react";
import PaginationItem from "./index";

const meta = {
    title: "Example/PaginationItem",
    component: PaginationItem,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof PaginationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Circular: Story = {
    args: {
        color: "primary",
        shape: "circular",
        selected: true,
    },
};
export const Rounded: Story = {
    args: {
        color: "primary",
        shape: "rounded",
        selected: true,
    },
};
