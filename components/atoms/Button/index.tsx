import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
  ['px-4 py-2 font-semibold uppercase cursor-pointer rounded-sm hover:text-blue-300'],
  {
    variants: {
      variant: {
        text: ['text-blue-500 dark:hover:text-rose-700'],
        contained: ['bg-blue-500 text-white'],
        outlined: ['outline outline-1 outline-blue-500 text-blue-500'],
      },
      size: {
        small: ['text-sm', 'py-1', 'px-2', 'rounded-sm'],
        medium: ['text-base', 'py-2', 'px-6', 'rounded-md'],
        large: ['text-lg', 'px-12', 'py-4', 'rounded-lg'],
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    compoundVariants: [{}],
    defaultVariants: {
      variant: 'contained',
    },
  }
);

export interface IButton extends VariantProps<typeof buttonStyles> {
  children: React.ReactNode;
  onClick?: () => void;
  //  label: string
}

const Button: React.FC<IButton> = ({
  variant,
  size,
  fullWidth,
  children,
  ...props
}) => {
  return (
    <div className="cursor">
      <button className={buttonStyles({ variant, size, fullWidth })} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
