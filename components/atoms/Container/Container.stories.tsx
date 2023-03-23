import { ComponentStory, ComponentMeta } from '@storybook/react';
import Container, { IContainer } from '.';
import { mockContainerProps } from './Container.mocks';

export default {
  title: 'atoms/Container',
  component: Container,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Small = Template.bind({});
Small.args = { ...mockContainerProps.small } as IContainer;

export const Medium = Template.bind({});
Medium.args = {
  ...mockContainerProps.medium,
} as IContainer;

export const Large = Template.bind({});
Large.args = {
  ...mockContainerProps.large,
} as IContainer;
