import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchBar from '.';

export default {
  title: 'molecules/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Base = Template.bind({});
Base.args = {};
