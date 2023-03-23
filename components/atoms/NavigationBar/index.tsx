import { cva, VariantProps } from 'class-variance-authority';

const navigationBarStyles = cva('flex gap-2 cursor-pointer', {
  variants: {
    variant: {
      vertical: 'flex flex-col',
    },
  },
  compoundVariants: [],
  defaultVariants: {},
});

const ListItem = [
    'about',
    'contact-us',
    'blog',
    'news'
]

export interface INavigationBar extends VariantProps<typeof navigationBarStyles> {
}

const NavigationBar: React.FC<INavigationBar> = ({variant}) => {
  return (
    <ul className={navigationBarStyles({variant})}>
      {ListItem.map((item, index) => <li key={index} className='text-gray-800 hover:text-gray-700 dark:text-gray-100 dark:hover:text-rose-700'>{item}</li>)}
    </ul>
  );
};

export default NavigationBar;
