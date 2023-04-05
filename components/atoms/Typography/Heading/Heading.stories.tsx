import { ComponentMeta, ComponentStory } from "@storybook/react";
import Heading, { HeadingProps } from ".";
import { mockHeadingProps } from "./Heading.mocks";

export default {
  title: 'atoms/Typography/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Standard = Template.bind({});
Standard.args = {
    ...mockHeadingProps.standard
} as HeadingProps;

export const Primary = Template.bind({});
Primary.args = {
  ...mockHeadingProps.primary,
} as HeadingProps;

export const Secondary = Template.bind({});
Secondary.args = {
  ...mockHeadingProps.secondary,
} as HeadingProps;

