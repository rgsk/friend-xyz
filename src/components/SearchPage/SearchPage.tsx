"use client";

import { useState } from "react";
import PageContainer from "../Common/PageContainer";
import TextContent from "../Common/TextContent";
import FriendsList from "./Children/FriendsList/FriendsList";
import SearchBar from "./Children/SearchBar/SearchBar";

interface ISearchPageProps {}
const SearchPage: React.FC<ISearchPageProps> = ({}) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <PageContainer>
      <div>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
      <div className="mt-3">
        {!!searchInput ? (
          <TextContent element="span" variant="16">
            SEARCH 🌎
          </TextContent>
        ) : (
          <TextContent element="span" variant="16">
            TRENDING 📈
          </TextContent>
        )}

        <div className="mt-3">
          <FriendsList />
        </div>
      </div>
    </PageContainer>
  );
};
export default SearchPage;
