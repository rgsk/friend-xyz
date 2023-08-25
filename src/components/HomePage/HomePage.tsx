"use client";

import PageContainer from "../Common/PageContainer";
import TextContent from "../Common/TextContent";
import Feed from "./Children/Feed/Feed";

interface IHomePageProps {}
const HomePage: React.FC<IHomePageProps> = ({}) => {
  return (
    <PageContainer>
      <div className="flex justify-center">
        <TextContent element="h1" variant="22">
          friend <span className="text-primary">xyz</span>
        </TextContent>
      </div>
      <div className="mt-5">
        <Feed />
      </div>
    </PageContainer>
  );
};
export default HomePage;
