import { ComponentMeta, ComponentStory } from "@storybook/react";
import SocialIcons, { SocialIconProps } from ".";

export default {
  title: 'molecules/SocialIcons',
  component: SocialIcons,
} as ComponentMeta<typeof SocialIcons>;

const Template: ComponentStory<typeof SocialIcons> = (args) => (
  <SocialIcons {...args} />
);

export const Base = Template.bind({});
Base.args = {} as SocialIconProps;
