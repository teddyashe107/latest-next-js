import { IBadge } from '.';

const yellow: IBadge = {
  variant: 'yellow',
  children: 'hello',
  badgeContent: 1,
};

const blue: IBadge = {
  ...yellow,
  variant: 'blue',
};

const red: IBadge = {
  ...yellow,
  variant: 'red',
};

const black: IBadge = {
  ...yellow,
  variant: 'black',
};

export const mockTemplateProps = {
  yellow,
  blue,
  red,
  black,
};
