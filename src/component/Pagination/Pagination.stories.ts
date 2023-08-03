import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "./index";

const meta = {
    title: "Example/Pagination",
    component: Pagination,
    tags: ["autodocs"],
    argTypes: {},
    parameters: {
        docs: {
            description: {
                component: "siblingCount는 count보다 1/2보다 작은 값이 와야합니다. ",
            },
        },
    },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Circular: Story = {
    args: {
        color: "primary",
        shape: "circular",
    },
};

export const Rounded: Story = {
    args: {
        color: "primary",
        shape: "rounded",
    },
};
