import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

interface ISearchBarProps {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
}
const SearchBar: React.FC<ISearchBarProps> = ({
  searchInput,
  setSearchInput,
}) => {
  return (
    <div>
      <input
        placeholder="Search for friends"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        className={clsx(
          `bg-[#0C0C0C] border border-gray-dark rounded-lg py-5 px-4 focus:outline-none`,
          "w-full"
        )}
      ></input>
    </div>
  );
};
export default SearchBar;
