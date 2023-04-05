import { ComponentStory, ComponentMeta } from '@storybook/react';
import TopBar, { TopBarProps } from '.';
import { mockTopBarProps } from './TopBar.mocks';

export default {
  title: 'molecules/TopBar',
  component: TopBar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TopBar>;

const Template: ComponentStory<typeof TopBar> = (args) => (
  <TopBar {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockTopBarProps.base,
} as TopBarProps;


