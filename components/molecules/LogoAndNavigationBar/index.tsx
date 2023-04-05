import NavigationBar from '@/components/atoms/NavigationBar';
import Logo from '@/components/atoms/utility/Logo';

export interface ILogoAndNavigationBar {
  toggleNavigation?: boolean;
}

const LogoAndNavigationBar: React.FC<ILogoAndNavigationBar> = ({
  toggleNavigation = false,
}) => {
  return (
    <div className=" md:flex items-center justify-between w-full py-3">
      <Logo
        alt="logo placeholder"
        src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png"
        title="teddy"
      />
      <NavigationBar
        hidden={toggleNavigation}
        listItems={['home', 'blog', 'about']}
        activeState
      />
    </div>
  );
};

export default LogoAndNavigationBar;
