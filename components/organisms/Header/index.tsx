import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import LogoAndNavigationBar from '@/components/molecules/LogoAndNavigationBar';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <Container size="medium">
      <div className="flex items-center justify-between px-8 border-b-2 border-gray-300 shadow-lg dark:border-b-2 dark:border-gray-800 dark:bg-black dark:text-white">
        <LogoAndNavigationBar />
        <Button variant="text">
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
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </Button>
      </div>
    </Container>
  );
};

export default Header;
