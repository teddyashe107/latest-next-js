import { ITextField } from '.';

const outlined: ITextField = {
  id: 'outlined-basic',
  label: 'Outlined',
  variant: 'outlined',
  error: true,
};

const filled: ITextField = {
  id: 'filled-basic',
  label: 'Filled',
  variant: 'filled',
  error: false,
};

const standard: ITextField = {
  id: 'standard-basic',
  label: 'Standard',
  variant: 'standard',
  error: false,
};

export const mockTextFieldProps = {
  outlined,
  filled,
  standard,
};
