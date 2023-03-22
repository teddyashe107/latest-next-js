import { ComponentStory, ComponentMeta, storiesOf } from '@storybook/react';
import Badge, { IBadge } from '.';
import { mockTemplateProps } from './Badge.mocks';

export default {
  title: 'molecules/Badge',
  component: Badge,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const YellowBadge = Template.bind({});
YellowBadge.args = {
  ...mockTemplateProps.yellow,
} as IBadge;

export const RedBadge = Template.bind({});
RedBadge.args = {
  ...mockTemplateProps.red,
} as IBadge;

export const BlueBadge = Template.bind({});
BlueBadge.args = {
  ...mockTemplateProps.blue,
} as IBadge;

export const BlackBadge = Template.bind({});
BlackBadge.args = {
  ...mockTemplateProps.black,
} as IBadge;

/**
 * render a jsx or react node in storybook using storiesOf
 * function from
 */

// storiesOf('atoms/Badge', module).add('with JSX', () => {
//   return (
//     <Badge badgeContent={1} variant="yellow">
//  <svg
//    xmlns="http://www.w3.org/2000/svg"
//    viewBox="0 0 20 20"
//    fill="currentColor"
//    className="w-5 h-5"
//  >
//    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
//    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
//  </svg>;
//     </Badge>
//   );
// });
