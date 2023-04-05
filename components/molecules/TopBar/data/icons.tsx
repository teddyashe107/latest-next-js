import dynamic from 'next/dynamic';

const Icon = dynamic(() => import('@/fontawesome'), {
  ssr: false,
});

export const icons: React.ReactNode[] = [
  <Icon key="icon1" icon={['fas', 'phone']} className="text-white" />,
  <Icon key="icon2" icon={['fas', 'envelope']} className="text-white" />,
  <Icon key="icon1" icon={['fas', 'location-dot']} className="text-white" />,
];
