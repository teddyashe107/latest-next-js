import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(['font-semibold text-white bg-red-900'], {
	variants: {
		variant: {
			primary: ['bg-lime-800'],
			secondary: ['bg-purple-600', 'uppercase'],
		},
		size: {
			small: ['text-sm', 'py-1', 'px-2', 'rounded-sm'],
			medium: ['text-base', 'py-2', 'px-4', 'rounded-md'],
            large: ['text-md', 'py-3', 'px-6', 'rounded-lg']
		},
        fullWidth: {
            true: 'w-full'
        }
	},
    compoundVariants: [
        {
            // variant: 'primary',
            // size: 'medium',
            // className:'rounded-lg text-red-800'
        }
    ],
    defaultVariants: {
        variant: 'primary'
    }
});



export interface Props extends  VariantProps<typeof buttonStyles> {
    children: React.ReactNode,
    onClick?: () => void,
  //  label: string
}

const Button = ({ variant, size, fullWidth, children, ...props }: Props) => {
	return <button className={buttonStyles({ variant, size, fullWidth})} {...props}>{children}</button>;
};

export default Button;
