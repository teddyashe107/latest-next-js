import { cva, VariantProps } from 'class-variance-authority';

const badgeStyles = cva(
  [
    'flex items-center justify-center text-white text-sm font-semibold rounded-full w-6 h-6 absolute -top-5 -right-2',
  ],
  {
    variants: {
      variant: {
        red: 'bg-red-500',
        yellow: 'bg-yellow-500',
        blue: ['bg-blue-500'],
        black: 'bg-black',
      },
      size: {},
    },
    compoundVariants: [{}],
    defaultVariants: {
      variant: 'blue',
    },
  }
);

export interface IBadge extends VariantProps<typeof badgeStyles> {
  children?: React.ReactNode;
  badgeContent: number;
}

const Badge: React.FC<IBadge> = ({ variant, size, badgeContent, children }) => {
  return (
    <>
      <div className="relative inline-flex m-4">
        <div>{children}</div>
        <div className={badgeStyles({ variant, size })}>{badgeContent}</div>
      </div>
    </>
  );
};

export default Badge;
