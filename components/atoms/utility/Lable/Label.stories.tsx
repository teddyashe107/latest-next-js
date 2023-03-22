import { ComponentMeta, ComponentStory } from '@storybook/react';
import Label, { ILabel } from '.';
import { mockLabelProps } from './Label.mocks';

export default {
  title: 'atoms/utility/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockLabelProps.base
} as ILabel;
