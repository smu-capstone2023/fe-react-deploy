import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./index"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Example/Avatar",
    component: Avatar,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: {
        size: 100,
        onClick: (()=>{alert('프로필(Small)을 클릭하셨습니다.')}),
    },
};

export const Big: Story = {
    args: {
        size: 300,
        onClick: (()=>{alert('프로필(Big)을 클릭하셨습니다.')}),
    },
};

export const Add_Src: Story = {
    args: {
        size: 100,
        onClick: (()=>{alert('프로필(Add_Src)을 클릭하셨습니다.')}),
        src: "https://user-images.githubusercontent.com/55094745/239910738-ce7c1b5b-4367-4713-99e2-3de51bac6cbb.png"
    },
};