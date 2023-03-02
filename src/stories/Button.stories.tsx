import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./../components/Button";
import "./../assets/index.css";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Blue = Template.bind({});
Blue.args = {
  children: "Button",
  color: "blue",
  bgColor: "blue",
};

export const Red = Template.bind({});
Red.args = {
  children: "Button",
  color: "red",
  bgColor: "red",
};

export const Green = Template.bind({});
Green.args = {
  children: "Button",
  color: "green",
  bgColor: "green",
};
