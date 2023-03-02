import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CurrencyLogo } from "./../components/CurrencyLogo";
import "./../assets/index.css";

export default {
  title: "Example/CurrencyLogo",
  component: CurrencyLogo,
} as ComponentMeta<typeof CurrencyLogo>;

const Template: ComponentStory<typeof CurrencyLogo> = (args) => (
  <CurrencyLogo {...args} />
);

export const Example = Template.bind({});
Example.args = {
  dataSrc:
    "https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg",
  color: "rgb(247, 139, 26)",
};
