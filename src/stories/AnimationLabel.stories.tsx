import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AnimationLabel } from "./../components/AnimationLabel";
import "./../assets/index.css";

export default {
  title: "Example/AnimationLabel",
  component: AnimationLabel,
} as ComponentMeta<typeof AnimationLabel>;

const Template: ComponentStory<typeof AnimationLabel> = (args) => <AnimationLabel {...args} />;

export const Up = Template.bind({});
Up.args = {
  children: "Rp 100.000",
  changes: "up"
};

export const Down = Template.bind({});
Down.args = {
  children: "Rp 100.000",
  changes: "down"
};
