import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PercentageLabel } from "./../components/PercentageLabel";
import "./../assets/index.css";

export default {
  title: "Example/PercentageLabel",
  component: PercentageLabel,
} as ComponentMeta<typeof PercentageLabel>;

const Template: ComponentStory<typeof PercentageLabel> = (args) => <PercentageLabel {...args} />;

export const Positive = Template.bind({});
Positive.args = {
  n: "100",
};

export const Negative = Template.bind({});
Negative.args = {
  n: "-100",
};
