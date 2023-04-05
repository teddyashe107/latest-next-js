import { cva, VariantProps } from 'class-variance-authority';
import styles from './Heading.module.css'
const headingStyles = cva('font-bold tracking-wider dark:text-gray-100', {
  variants: {
    variant: {
      h1: 'text-5xl',
      h2: 'text-3xl',
      h3: 'text-2xl',
      h4: 'text-xl',
      h5: 'text-lg',
      h6: 'text-base tracking-wide font-normal',
    },
    firstLetter: {
      true: 'first-letter:text-rose-600 first-letter:font-extrabold first-letter:uppercase'
    }
  },
  compoundVariants: [],
  defaultVariants: {},
});

type headingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends VariantProps<typeof headingStyles> {
  children: React.ReactNode;
  variant: headingVariant;
}

const Heading: React.FC<HeadingProps> = ({  variant, firstLetter,children }) => {
 const Tag = variant;
 return <Tag className={`${headingStyles({variant, firstLetter})} ${styles['animate-slide-in']}`}>{children}</Tag>
};

export default Heading;
