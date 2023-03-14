import { cva, VariantProps } from "class-variance-authority";

const templateStyles = cva(['border-lg border-red-900'], {
  variants: {
    variant: {
    },
    size: {

    },
    fullWidth: {
   
    },
  },
  compoundVariants: [
    {

    },
  ],
  defaultVariants: {
 
  },
});


export interface ITemplate extends VariantProps<typeof templateStyles> {
  children: React.ReactNode;
  //  label: string
}


const Template: React.FC<ITemplate> = ({variant, size, children}) => {
     return <div className={templateStyles({variant, size})}>{children}</div>
}

export default Template