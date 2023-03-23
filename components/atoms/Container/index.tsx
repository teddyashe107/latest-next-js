import { cva, VariantProps } from 'class-variance-authority';

const containerStyles = cva('mx-auto py-2', {
  variants: {
    size: {
      small: 'w-2/4',
      medium: 'w-10/12',
      large: '11/12',
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: 'medium',
  },
});

export interface IContainer extends VariantProps<typeof containerStyles> {
  children?: React.ReactNode;
}
const Container: React.FC<IContainer> = ({
  size,
  children,
}) => {
  return (
    <div className={containerStyles({ size})}>{children}</div>
  );
};

export default Container;
