import dynamic from 'next/dynamic';

const Icon = dynamic(() => import('@/fontawesome'), {
  ssr: false,
});
export interface SocialIconProps {}

const SocialIcons: React.FC<SocialIconProps> = () => {
  return (
    <div className="flex gap-3 items-center">
      <Icon icon={['fab', 'facebook']} className="text-white hover:text-rose-700" />
      <Icon icon={['fab', 'twitter']} className="text-white" />
      <Icon icon={['fab', 'linkedin']} className="text-white" />
      <Icon icon={['fab', 'github']} className="text-white" />
    </div>
  );
};

export default SocialIcons;
