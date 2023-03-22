import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/utility/Icons';
import Label from '@/components/atoms/utility/Lable';

export interface ISearchBar {
  onClick?: () => void;
}
const SearchBar: React.FC<ISearchBar> = () => {
  return (
    <div className='flex gap-4 items-center'>
      <div>
        <Label id='email' label='Email' />
        <input type="text" id='email' placeholder='please insert your email' className=' py-2 rounded-lg px-2  outline-slate-200' />
      </div>
      <Button>
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
