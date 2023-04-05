import { cva, VariantProps } from 'class-variance-authority';
import { useCallback, useState } from 'react';
import Icon from '../utility/Icons';

const navigationBarStyles = cva('mt-4 md:mt-0 md:flex gap-x-8', {
  variants: {
    variant: {
      vertical: 'flex flex-col',
    },
    active: {
      home: 'text-rose-700 bg-yellow-700',
    },
    hidden: {
      true: 'hidden',
    },
    textSmall: {
      true: 'text-xs ',
    },
  },
  compoundVariants: [],
  defaultVariants: {},
});

export interface NavigationBarProps
  extends VariantProps<typeof navigationBarStyles> {
  icons?: React.ReactNode[];
  listItems: string[];
  activeState?: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  variant,
  hidden,
  icons = [],
  listItems = [],
  textSmall,
  activeState = false,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = useCallback((item: number) => {
    setActiveIndex(item);
  }, []);

  const renderListItems = () =>
    listItems.map((item, index) => (
      <li
        key={index}
        className={`${navigationBarStyles({ textSmall })} ${
          activeState && activeIndex === index
            ? 'text-rose-700 dark:text-rose-700'
            : 'text-gray-700'
        } flex items-center gap-x-0 py-2 md:py-0 hover:text-gray-900 dark:text-gray-100 dark:hover:text-rose-700 cursor-pointer`}
        onClick={() => handleClick(index)}
      >
        {icons[index] ? <Icon size="small"> {icons[index]} </Icon> : ''}
        {item}
      </li>
    ));

  return (
    <ul className={navigationBarStyles({ variant, hidden })}>
      {renderListItems()}
    </ul>
  );
};

export default NavigationBar;
