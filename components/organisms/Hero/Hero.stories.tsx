import { ComponentMeta, ComponentStory } from "@storybook/react";
import Hero from ".";

export default {
  title: 'organisms/Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Base = Template.bind({});
Base.args = {};
