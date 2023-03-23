import { cva, VariantProps } from 'class-variance-authority';

const navigationBarStyles = cva('flex gap-2 border border-rose-500', {
  variants: {
    variant: {
      vertical: 'flex flex-col',
    },
  },
  compoundVariants: [],
  defaultVariants: {},
});

export interface INavigationBar extends VariantProps<typeof navigationBarStyles> {
}

const NavigationBar: React.FC<INavigationBar> = ({variant}) => {
  return (
    <ul className={navigationBarStyles({variant})}>
      <li>about</li>
      <li>contact</li>
      <li>blog</li>
      <li>news</li>
    </ul>
  );
};

export default NavigationBar;
