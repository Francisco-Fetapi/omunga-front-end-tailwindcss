import type { Meta, StoryObj } from "@storybook/react";

import React from "react";

import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

type Story = StoryObj<typeof Header>;

export const Primary = () => <Header />;
// export const Secondary = () => <Header>Secondary</Header>;
// export const Tertiary = () => <Header>Tertiary</Header>;

export default meta;
