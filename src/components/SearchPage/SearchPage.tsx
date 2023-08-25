"use client";

import PageContainer from "../Common/PageContainer";
import FriendsList from "./Children/FriendsList/FriendsList";
import SearchBar from "./Children/SearchBar/SearchBar";

interface ISearchPageProps {}
const SearchPage: React.FC<ISearchPageProps> = ({}) => {
  return (
    <PageContainer>
      <div>
        <SearchBar />
      </div>
      <div>
        <FriendsList />
      </div>
    </PageContainer>
  );
};
export default SearchPage;
