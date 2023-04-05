import NavigationBar from '@/components/atoms/NavigationBar';
import { icons } from './data/icons';
import Container from '@/components/atoms/Container';
import SocialIcons from '../SocialIcons';
import Button from '@/components/atoms/Button';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const Icon = dynamic(() => import('@/fontawesome'), {
  ssr: false,
});

export interface TopBarProps {
  // isOpen: boolean,
}
const TopBar: React.FC<TopBarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="border-b py-2  relative">
      <Container>
        <div
          className={`
    fixed  top-0 right-0 h-full z-10 transform transition-all duration-300 ease-in-out
        ${
          isOpen
            ? 'translate-x-0 max-w-1/2 md:w-full bg-rose-600 md:bg-inherit'
            : 'translate-x-full  md:w-full md:translate-x-0'
        }
    md:relative md:flex md:justify-between md:items-center

  `}
        >
          <div className="md:hidden flex justify-end">
            <Button onClick={handleIsOpen} size="large" variant="text">
              <Icon
                icon={['fas', 'circle-xmark']}
                className=" text-white hover:text-gray-900 font-bold py-3 px-3 rounded-full"
              />
            </Button>
          </div>
          <div className="bg-rose-700 md:bg-inherit px-4 w-full">
            <NavigationBar
              icons={icons}
              textSmall
              listItems={[
                '+251 932083688',
                'teddyashe107@gmail.com',
                'AddisAbeba, Ethiopia',
              ]}
            />
          </div>
          <div className="bg-rose-700 md:bg-inherit py-2 flex justify-center mt-4">
            <SocialIcons />
          </div>
        </div>
      </Container>
      <div className={`flex justify-center md:hidden`}>
        <Button onClick={handleIsOpen} variant="text">
          {' '}
          <Icon icon="bars-staggered" className="text-white px-2" />
          Top Menu
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
