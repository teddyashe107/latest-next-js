import { cva, VariantProps } from 'class-variance-authority';

const labelStyles = cva('', {
  variants: {},
  compoundVariants: [{}],
  defaultVariants: {},
});
export interface ILabel extends VariantProps<typeof labelStyles> {
 id: string;
 label: string;
}

const Label: React.FC<ILabel> = ({id, label}) => {
  return (
    <label htmlFor={id} className='text-gray-700'>{label}</label>
  );
};

export default Label;
