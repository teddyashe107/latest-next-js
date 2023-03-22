import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icon, { IIcon } from '.';
import { mockIconProps } from './Icon.mocks';

export default {
  title: 'atoms/utility/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  ...mockIconProps.medium,
} as IIcon;

export const Large = Template.bind({});
Large.args = {
  ...mockIconProps.large,
};
