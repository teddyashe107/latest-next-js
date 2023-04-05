import { cva, VariantProps } from 'class-variance-authority';

const iconStyles = cva('text-gray-900 dark:text-white', {
  variants: {
    size: {
      small: 'w-4 h-4',
      medium: 'w-8 h-8',
      large: 'w-10 h-10',
    },
  },
  compoundVariants: [{}],
  defaultVariants: {
    size: 'small',
  },
});
export interface IIcon
  extends VariantProps<typeof iconStyles> {
    children: React.ReactNode;
    onClick?: () => void;
  }

const Icon: React.FC<IIcon> = ({ size, onClick, children }) => {
  
  return (
    <div onClick={onClick} className={iconStyles({ size })}>
         {children}
    </div>
  );
};

export default Icon;
