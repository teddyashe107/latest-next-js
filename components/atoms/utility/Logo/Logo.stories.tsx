import { ComponentMeta, ComponentStory } from '@storybook/react';
import Logo, { ILogo } from '.';
import { mockLogoProps } from './Logo.mocks';

export default {
  title: 'atoms/utility/logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockLogoProps.base,
} as ILogo;
