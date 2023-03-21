import { cva, VariantProps } from 'class-variance-authority';
import Image from 'next/image';

const avatarStyles = cva(
  [
    'text-white rounded-full flex justify-center items-center font-semibold uppercase',
  ],
  {
    variants: {
      variant: {
        red: 'bg-red-500',
        yellow: 'bg-yellow-500',
        blue: ['bg-blue-500'],
        black: 'bg-black',
      },
      size: {
        small: 'w-10 h-10',
        medium: 'w-12 h-12',
        large: 'w-14 h-14',
      },
    },
    compoundVariants: [{}],
    defaultVariants: {
      variant: 'blue',
      size: 'large',
    },
  }
);

export interface IAvatar extends VariantProps<typeof avatarStyles> {
  children?: React.ReactNode;
  alt?: string;
  src?: string;
}

const Avatar: React.FC<IAvatar> = ({ variant, size, alt, src, children }) => {
  return (
    <>
      {!src || !alt ? (
        <div className={`${avatarStyles({ variant, size })}`}>{children}</div>
      ) : (
        <Image src={src} alt={alt} width={50} height={50} className="rounded-full" />
      )}
    </>
  );
};

export default Avatar;
