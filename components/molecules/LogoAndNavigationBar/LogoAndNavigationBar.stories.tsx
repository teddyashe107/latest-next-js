import { ComponentMeta, ComponentStory } from '@storybook/react';
import LogoAndNavigationBar, { ILogoAndNavigationBar } from '.';

export default {
  title: 'molecules/LogoAndNavigationBar',
  component: LogoAndNavigationBar,
} as ComponentMeta<typeof LogoAndNavigationBar>;

const Template: ComponentStory<typeof LogoAndNavigationBar> = (args) => (
  <LogoAndNavigationBar {...args} />
);

export const Base = Template.bind({});
Base.args = {} as ILogoAndNavigationBar;
