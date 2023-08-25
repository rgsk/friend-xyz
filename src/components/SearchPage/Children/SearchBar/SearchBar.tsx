import { useState } from "react";

interface ISearchBarProps {}
const SearchBar: React.FC<ISearchBarProps> = ({}) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <input
        placeholder="Search for friends"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      ></input>
    </div>
  );
};
export default SearchBar;
