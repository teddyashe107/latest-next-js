import { cva, VariantProps } from 'class-variance-authority';
import styles from './Heading.module.css'
const headingStyles = cva('font-bold tracking-wider dark:text-gray-100', {
  variants: {
    variant: {
      h1: 'text-4xl',
      h2: 'text-3xl',
      h3: 'text-2xl',
      h4: 'text-xl',
      h5: 'text-lg',
      h6: 'text-base',
    },
  },
  compoundVariants: [],
  defaultVariants: {},
});

type headingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface IHeading extends VariantProps<typeof headingStyles> {
  text: string;
  variant: headingVariant;
}

const Heading: React.FC<IHeading> = ({ text, variant }) => {
 const Tag = variant;
 return <Tag className={`${headingStyles({variant})} ${styles['animate-slide-in']}`}>{text}</Tag>
};

export default Heading;
