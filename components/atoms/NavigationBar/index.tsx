import { cva, VariantProps } from 'class-variance-authority';
import { useState } from 'react';

const navigationBarStyles = cva('mt-4 md:mt-0 md:flex gap-x-8', {
  variants: {
    variant: {
      vertical: 'flex flex-col',
    },
    active: {
      home: 'text-rose-700 bg-yellow-700'
    },
    hidden: {
      true: 'hidden'
    }
  },
  compoundVariants: [],
  defaultVariants: {},
});

const ListItem = ['home', 'blog', 'about'];

export interface INavigationBar
  extends VariantProps<typeof navigationBarStyles> {}

const NavigationBar: React.FC<INavigationBar> = ({ variant, hidden }) => {

  const [active, setActive] = useState(0);

  function handleClick(item: number) {
    console.log('teddy clicked', item)
    setActive(item)
  }

  return (
    <ul className={navigationBarStyles({ variant, hidden })}>
      {ListItem.map((item, index) => (
        <li
          key={index}
          className={`${active === index ? 'text-rose-700 dark:text-rose-700' : 'text-gray-700'} py-2 md:py-0  hover:text-gray-900 dark:text-gray-100 dark:hover:text-rose-700 cursor-pointer border-b`}
          onClick={() => handleClick(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default NavigationBar;
