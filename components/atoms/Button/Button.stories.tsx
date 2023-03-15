import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockButtonProps } from './Button.mocks';
import Button, { IButton } from './index';

export default {
  title: 'atoms/Button',
  component: Button,
  args: {
    children: 'button'
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Text = Template.bind({});
Text.args = {
  ...mockButtonProps.text,
} as IButton;

export const Contained = Template.bind({});
Contained.args = {
  ...mockButtonProps.contained,
} as IButton;

export const Outlined = Template.bind({});
Outlined.args = {
  ...mockButtonProps.outlined,
} as IButton;

export const Large = Template.bind({});
Large.args = {
  ...mockButtonProps.large,
} as IButton;

export const Medium = Template.bind({});
Medium.args = {
  ...mockButtonProps.medium,
} as IButton;

export const Small = Template.bind({});
Small.args = {
  ...mockButtonProps.small,
} as IButton;

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...mockButtonProps.fullWidth,
} as IButton;
