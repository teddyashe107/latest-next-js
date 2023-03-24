import { ComponentMeta, ComponentStory } from "@storybook/react";
import Heading, { IHeading } from ".";
import { mockHeadingProps } from "./Heading.mocks";

export default {
  title: 'atoms/Typography/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Standard = Template.bind({});
Standard.args = {
    ...mockHeadingProps.standard
} as IHeading;

export const Primary = Template.bind({});
Primary.args = {
  ...mockHeadingProps.primary,
} as IHeading;

export const Secondary = Template.bind({});
Secondary.args = {
  ...mockHeadingProps.secondary,
} as IHeading;

