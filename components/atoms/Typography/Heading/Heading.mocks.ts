import { HeadingProps } from '.';

const standard: HeadingProps = {
  variant: 'h1',
  children: 'standard',
  firstLetter: true
};

const primary: HeadingProps = {
  variant: 'h2',
  children: 'primary',
};

const secondary: HeadingProps = {
  variant: 'h3',
  children: 'Secondary',
};

export const mockHeadingProps = {
  standard,
  primary,
  secondary,
};
