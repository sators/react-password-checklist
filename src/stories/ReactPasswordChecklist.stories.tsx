import React, { useState } from "react";
import { Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ReactPasswordChecklist, { RuleNames } from "../index";
import { getDirection } from "@pxblue/storybook-rtl-addon";

// Metadata about the component, including title and decorators
const meta = {
  title: "ReactPasswordChecklist",
  component: ReactPasswordChecklist,
  argTypes: {
    value: { control: 'text', },
    valueAgain: { control: 'text', },
    minLength: { control: 'number', },
    maxLength: { control: 'number', },
    hideIcon: { control: 'boolean', },
    rtl: { control: 'boolean', },
    rules: {
      control: {
        type: 'object',
        options: [
          "minLength",
          "specialChar",
          "number",
          "capital",
          "match",
          "lowercase",
          "letter",
          "notEmpty",
          "capitalAndLowercase",
          "noSpaces",
        ],
      },
    },
    className: { control: 'text' },
    iconSize: { control: 'number', },
    validColor: { control: 'color', },
    invalidColor: { control: 'color', },
    validTextColor: { control: 'color', },
    invalidTextColor: { control: 'color', },
    messages: { control: 'object' },
  },
  args: {
    value: '',
    valueAgain: '',
    minLength: 8,
    maxLength: 16,
    hideIcon: false,
    rtl: getDirection() === "rtl",
    rules: ["minLength",
          "specialChar",
          "number",
          "capital",
          "match",
          "lowercase",
          "letter",
          "notEmpty",
          "capitalAndLowercase",
          "noSpaces",],
    iconSize: 24,
    messages: {},
  }
} as Meta;

export default meta;

type Story = (args: any) => JSX.Element;

// Default story
export const Default: Story = (args) => (
  <ReactPasswordChecklist {...args} onChange={action("onChange")} />
);

// Story with a custom class name
export const WithCustomClassName: Story = (args) => (
  <ReactPasswordChecklist {...args} onChange={action("onChange")} className="my-custom-class" />
);

// Story in a small container
export const InSmallContainer: Story = (args) => (
  <div style={{ width: "225px" }}>
    <ReactPasswordChecklist {...args} onChange={action("onChange")} />
  </div>
);

// Story with custom icons and colors
export const CustomIconAndColors: Story = (args) => (
  <ReactPasswordChecklist validTextColor="ForestGreen" invalidTextColor="fuchsia" validColor="#c7ad00" invalidColor="#380091" {...args} onChange={action("onChange")} />
);

// Story with custom messages
export const CustomMessages: Story = (args) => (
  <ReactPasswordChecklist
    {...args}
    onChange={action("onChange")}
    messages={{
      minLength: "La contraseña tiene más de 8 caracteres.",
      specialChar: "La contraseña tiene caracteres especiales.",
      number: "La contraseña tiene un número.",
      capital: "La contraseña tiene una letra mayúscula.",
      match: "Las contraseñas coinciden.",
    }}
  />
);

// Story with custom messages in RTL (Persian)
export const CustomMessagesRTL: Story = (args) => (
  <ReactPasswordChecklist
    {...args}
    onChange={action("onChange")}
    rtl={true}
    rules={["minLength", "specialChar", "number", "capital"]}
    messages={{
      minLength: "رمز عبور باید حداقل ۸ کارکتر باشد.",
      specialChar: "رمز عبور باید شامل کاراکترهای خاص (نمادها) باشد",
      number: "رمز عبور باید شامل اعداد باشد ",
      capital: "رمز عبور باید ترکیبی از حروف کوچک و بزرگ باشد.",
    }}
  />
);