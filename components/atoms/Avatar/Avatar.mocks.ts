import { IAvatar } from '.';

const red: IAvatar = {
  variant: 'red',
  size: 'small',
};

const image: IAvatar = {
  size: 'large',
  src: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png',
  alt: 'avatar placeholder',
};
const yellow: IAvatar = {
  variant: 'yellow',
  children: 'AB',
};

const blue: IAvatar = {
  ...yellow,
  variant: 'blue',
};

const black: IAvatar = {
  ...yellow,
  variant: 'black',
};

const small: IAvatar = {
  ...yellow,
  size: 'small',
};

const medium: IAvatar = {
  ...yellow,
  size: 'medium',
};

const large: IAvatar = {
  ...yellow,
  size: 'large',
};

export const mockAvatarProps = {
  red,
  yellow,
  blue,
  black,
  small,
  medium,
  large,
  image
};
