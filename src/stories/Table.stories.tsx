import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Table } from "./../components/Table";
import "./../assets/index.css";

export default {
  title: "Example/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  tableRow: [
    {
      key: "name",
      label: "Currency Name",
      width: "200",
      component: (d: any) => d.name,
    },
    {
      key: "latestPrice",
      label: "Latest Price",
      width: "200",
      component: (d: any) => d.latestPrice,
    },
  ],
  dataKey: "name",
  data: [
    {
      name: "Bitcoin",
      latestPrice: "200.000.000",
    },
    {
      name: "Ethereum",
      latestPrice: "20.000.000",
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  className: "loading-skeleton",
  tableRow: [
    {
      key: "name",
      label: "Currency Name",
      width: "200",
      component: (d: any) => d.name,
    },
    {
      key: "latestPrice",
      label: "Latest Price",
      width: "200",
      component: (d: any) => d.latestPrice,
    },
  ],
  dataKey: "name",
  data: [
    {
      name: "Bitcoin",
      latestPrice: "200.000.000",
    },
    {
      name: "Ethereum",
      latestPrice: "20.000.000",
    },
  ],
};
