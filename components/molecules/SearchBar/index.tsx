import Button from '@/components/atoms/Button';
import TextField from '@/components/atoms/Inputs/TextField';
import Icon from '@/components/atoms/utility/Icons';
import Label from '@/components/atoms/utility/Lable';
import { ChangeEvent} from 'react';

export interface ISearchBar {
  onClick?: () => void;
}

function handleChange(event: ChangeEvent<HTMLInputElement>) {
  console.log(event.target.value);
}

function handleClick() {
  console.log('button clicked');
}

const SearchBar: React.FC<ISearchBar> = () => {
  return (
    <div className="flex gap-4 items-center">
      <div>
        <Label id="email" label="Email" />
        <TextField id="email" label="Email" onChange={handleChange} />
      </div>
      <Button onClick={handleClick}>
        <Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </Icon>
      </Button>
    </div>
  );
};

export default SearchBar;
