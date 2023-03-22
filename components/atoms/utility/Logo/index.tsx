import Image from 'next/image';

export interface ILogo {
  title?: string;
  src: string;
  alt: string;
}
const Logo: React.FC<ILogo> = ({ src, alt, title }) => {
  return (
    <div className='inline-flex items-center gap-2 rounded-sm overflow-hidden'>
      <Image src={src} alt={alt} width={30} height={30} />
      <p className='font-extrabold uppercase tracking-widest'>{title}</p>
    </div>
  );
};

export default Logo;
