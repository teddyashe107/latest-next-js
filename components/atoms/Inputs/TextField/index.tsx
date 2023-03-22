import { cva, VariantProps } from 'class-variance-authority';

const textFieldStyles = cva(['w-2/4 rounded-sm p-2'], {
  variants: {
    variant: {
      standard:
        ' border-b-2 border-gray-400 focus:border-b-2 focus:border-blue-500 focus:placeholder-blue-400 border-blue-500  outline-none',
      outlined: 'w-2/4 border-2 border-gray-200 outline-2 outline-blue-500',
      filled:
        'bg-gray-200 border-b-2 border-gray-400 focus:border-b-2  focus:border-blue-800 focus:placeholder-blue-400  outline-none',
    },

    error: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'outlined',
      error: true,
      className: 'border-2 border-red-500 outline-2 outline-red-500',
    },
    {
      variant: 'filled',
      error: true,
      className:
        'border-b-2 border-red-500 focus:border-b-2 focus:border-red-500',
    },
    {
      variant: 'standard',
      error: true,
      className:
        'border-b-2 border-red-500 focus:border-b-2 focus:border-red-500',
    },
  ],
  defaultVariants: {
    variant: 'outlined',
  },
});

export interface ITextField extends VariantProps<typeof textFieldStyles> {
  id: string;
  label: string;
  multiline?: boolean;
}

const TextField: React.FC<ITextField> = ({
  variant,
  id,
  label,
  error,
  multiline,
}) => {
  return (
    <>
      {multiline ? (
        <textarea rows={3} placeholder={label} className={textFieldStyles({variant, error})}/>
      ) : (
        <input
          type="text"
          id={id}
          placeholder={label}
          className={textFieldStyles({ variant, error })}
        />
      )}
    </>
  );
};

export default TextField;
