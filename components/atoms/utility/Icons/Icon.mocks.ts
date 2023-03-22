import { IIcon } from '.';

const medium: IIcon = {
  size: 'medium',
  children: '',
};

const large: IIcon = {
  ...medium,
  size: 'large',
};

export const mockIconProps = {
  medium,
  large,
};
