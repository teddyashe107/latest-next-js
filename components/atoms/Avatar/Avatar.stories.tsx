import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar, { IAvatar } from '.';

import { mockAvatarProps } from './Avatar.mocks';

export default {
  title: 'atoms/Avatar',
  component: Avatar,
  args: {
    children: 'A',
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Yellow = Template.bind({});
Yellow.args = {
  ...mockAvatarProps.yellow,
} as IAvatar;

export const Red = Template.bind({});
Red.args = {
  ...mockAvatarProps.red,
} as IAvatar;

export const Blue = Template.bind({});
Blue.args = {
  ...mockAvatarProps.blue,
} as IAvatar;

export const Black = Template.bind({});
Black.args = {
  ...mockAvatarProps.black,
} as IAvatar;

export const Image = Template.bind({});
Image.args = {
  ...mockAvatarProps.image,
} as IAvatar;

export const Small = Template.bind({});
Small.args = {
  ...mockAvatarProps.small,
} as IAvatar;

export const Medium = Template.bind({});
Medium.args = {
  ...mockAvatarProps.medium,
} as IAvatar;

export const Large = Template.bind({});
Large.args = {
  ...mockAvatarProps.large,
} as IAvatar;
