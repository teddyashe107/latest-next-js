import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(['font-semibold text-white'], {
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
            'true': 'w-full'
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
        variant: 'primary', 
        size: 'small'
    }
});



export interface Props extends  VariantProps<typeof buttonStyles> {
    children: React.ReactNode
}

const Button = ({ variant, size, fullWidth, children }: Props) => {
	return <button className={buttonStyles({ variant, size, fullWidth})}>{children}</button>;
};

export default Button;
