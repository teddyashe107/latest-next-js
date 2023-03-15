import { IButton } from '.';

const text: IButton = {
  variant: 'text',
  size: 'medium',
  children: 'text',
};

const contained: IButton = {
  variant: 'contained',
  size: 'medium',
  children: 'contained',
};

const outlined: IButton = {
  variant: 'outlined',
  size: 'large',
  children: 'outlined',
};

const large: IButton = {
  variant: 'contained',
  size: 'large',
  children: 'large',
};

const medium: IButton = {
  variant: 'contained',
  size: 'medium',
  children: 'medium',
};

const small: IButton = {
  variant: 'contained',
  size: 'small',
  children: 'small',
};

const fullWidth: IButton = {
  variant: 'contained',
  size: 'small',
  children: 'fullWidth',
  fullWidth: true,
};

export const mockButtonProps = {
  text,
  contained,
  outlined,
  large,
  medium,
  small,
  fullWidth,
};
