import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './index';

export default {
  title: 'Love/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// export const Primary = (
// 	<Button size="large" variant="secondary">
// 		Primary Button
// 	</Button>
// );
// export const Secondary = (
// 	<Button size="medium" variant="primary" fullWidth>
// 		Secondary Button
// 	</Button>
// );

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args}> </Button>
export const Primary: ComponentStory<typeof Button> = () => (
  <Button variant="primary" size="large" fullWidth>
    Button Teddy
  </Button>
);
//
// export const Primary = Template.bind({});
//
//
//
// Primary.args = {
// 	variant: 'primary',
//     size: 'small'
// };
