import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import LogoAndNavigationBar from '@/components/molecules/LogoAndNavigationBar';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const ThemeSwitch = dynamic(() => import('@/components/atoms/ThemeSwitch'), {
  ssr: false,
});

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const [toggle, setToggle] = useState(false);
  const [clicked, setClicked] = useState(false);

  function handleToggle() {
    setToggle(toggle ? false : true);
    setClicked(clicked ? false : true);
  }

  return (
    <Container size="medium">
      <div className="flex md:items-center justify-between px-8 border-b-2 border-gray-300 shadow-md dark:border-b-2 dark:border-gray-800 dark:bg-black dark:text-white">
        <LogoAndNavigationBar toggleNavigation={toggle} />
        {/* theme switcher button with ssr false this component depends on the clint window object  */}
        <ThemeSwitch />
        <span className="md:hidden">
          {/* change the button icon based on the toggle state */}
          {toggle ? (
            // button with hamburger icon if toggle is true
            <Button variant="text" onClick={handleToggle} clicked={clicked}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
          ) : (
            // button with x icon if toggle is false
            <Button variant="text" onClick={handleToggle} clicked={clicked}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          )}
        </span>
      </div>
    </Container>
  );
};

export default Header;
