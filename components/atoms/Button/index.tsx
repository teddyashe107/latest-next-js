import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
  [
    'px-4 py-2 font-semibold uppercase cursor-pointer rounded-sm hover:text-blue-300',
  ],
  {
    variants: {
      variant: {
        text: ['text-blue-700 dark:text-rose-700 dark:hover:text-rose-600'],
        contained: ['bg-rose-800 text-white'],
        outlined: ['outline outline-1 outline-rose-700 text-rose-700'],
      },
      size: {
        small: ['text-sm', 'py-1', 'px-2', 'rounded-sm'],
        medium: ['text-base', 'py-2', 'px-6', 'rounded-md'],
        large: ['text-lg', 'px-12', 'py-4', 'rounded-lg'],
      },
      fullWidth: {
        true: 'w-full',
      },
      clicked: {
        true: 'text-rose-700',
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
  clicked,
  ...props
}) => {
  return (
    <div className="cursor">
      <button
        className={buttonStyles({ variant, size, fullWidth, clicked })}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
