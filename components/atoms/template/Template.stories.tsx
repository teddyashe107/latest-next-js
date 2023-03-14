import { ComponentStory, ComponentMeta } from '@storybook/react';
import Template, { ITemplate } from '.';
import { mockTemplateProps } from './Template.mocks';

export default {
  title: 'template/BaseTemplate',
  component: Template,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Template>;

const BTemplate: ComponentStory<typeof Template> = (args) => (
  <Template {...args} />
);

export const Primary = BTemplate.bind({});
Primary.args = {
  ...mockTemplateProps.base,
} as ITemplate;
