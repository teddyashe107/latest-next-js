import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockButtonProps } from './Button.mocks';
import Button, { IButton } from './index';

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}> Button </Button>
);

export const Primary = Template.bind({});
Primary.args = {
  ...mockButtonProps.primary
} as IButton;

export const Secondary = Template.bind({});
Secondary.args = {
  ...mockButtonProps.secondary
} as IButton;

export const Large = Template.bind({});
Large.args = {
  ...mockButtonProps.large
} as IButton;

export const Medium = Template.bind({})
Medium.args = {
  ...mockButtonProps.medium
} as IButton

export const Small = Template.bind({});
Small.args = {
   ...mockButtonProps.small
} as IButton;
