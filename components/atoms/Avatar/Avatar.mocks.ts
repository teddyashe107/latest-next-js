import { IAvatar } from '.';

const red: IAvatar = {
  variant: 'red',
  size: 'small',
  src: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png',
  alt: 'avatar placeholder',
};

const image: IAvatar = {
  ...red,
  src: '',
  alt: '',
}
const yellow: IAvatar = {
  ...red,
  variant: 'yellow',
  children: 'AB',
};

const blue: IAvatar = {
  ...red,
  variant: 'blue',
};

const black: IAvatar = {
  ...red,
  variant: 'black',
};

const small: IAvatar = {
  ...red,
  size: 'small',
};

const medium: IAvatar = {
  ...red,
  size: 'medium',
};

const large: IAvatar = {
  ...red,
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
