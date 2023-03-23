import NavigationBar from "@/components/atoms/NavigationBar";
import Logo from "@/components/atoms/utility/Logo";

export interface ILogoAndNavigationBar {}

const LogoAndNavigationBar: React.FC<ILogoAndNavigationBar> = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <Logo
        alt="logo placeholder"
        src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png"
        title="teddy"
      />
      <NavigationBar />
    </div>
  );
};

export default LogoAndNavigationBar;
