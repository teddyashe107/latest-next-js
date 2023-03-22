import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextField, { ITextField } from '.';
import { mockTextFieldProps } from './TextField.mocks';

export default {
  title: 'atoms/Inputs/TextField',
  component: TextField,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Outlined = Template.bind({});
Outlined.args = {
  ...mockTextFieldProps.outlined,
} as ITextField;

export const Filled = Template.bind({});
Filled.args = {
  ...mockTextFieldProps.filled,
} as ITextField;

export const Standard = Template.bind({});
Standard.args = {
  ...mockTextFieldProps.standard,
} as ITextField;
