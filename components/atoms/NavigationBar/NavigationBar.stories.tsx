import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavigationBar, { NavigationBarProps } from '.';
import { mockNavigationBarProps } from './NavigationBar.mocks';

export default {
  title: 'atoms/NavigationBar',
  component: NavigationBar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = (args) => (
  <NavigationBar {...args} />
);

export const VerticalNavigation = Template.bind({});
VerticalNavigation.args = {
  ...mockNavigationBarProps.vertical,
} as NavigationBarProps;

export const HorizontalNavigation = Template.bind({});
HorizontalNavigation.args = {
  ...mockNavigationBarProps.horizontal,
} as NavigationBarProps;
