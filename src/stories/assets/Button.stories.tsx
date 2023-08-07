import { Meta, Story } from '@storybook/react';
import {Button} from "../Button";
import { ButtonProps } from '../Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {clickHandler: {action: "clicked"}},
} as Meta;

const Template: Story = (args) => <Button label={''} {...args} />;

/* Button 종류 */
// filled, primary
export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  backgroundColor: "#4169E1",
  size: "medium",
  color: "white",
  borderRadius: 5,
};

// filled, disabled, primary
export const DisabledGray = Template.bind({});
DisabledGray.args = {
  label: 'Disabled Gray Button',
  backgroundColor: "#D9D9D9",
  size: "medium",
  color: "white",
  textColor: "#ffffff;",
  variant: "filled",
  borderRadius: 5,
};

// outline, disabled, primary
export const OutlineDisabledPrimary = Template.bind({});
OutlineDisabledPrimary.args = {
  label: 'OutlineDisabledPrimary Button',
  backgroundColor: "transparent", // 배경색을 비어있는 투명으로 설정
  size: "medium",
  color: "#4169E1",
  variant: "outline",
};

// outline, disabled, gray
export const OutlineDisabledGray= Template.bind({});
OutlineDisabledGray.args = {
  label: 'OutlineDisabledGray Button',
  backgroundColor: "#transparent",
  size: "medium",
  color: "white", 
  variant: "outline",
};
