import ScrollableContainer from "@/components/Common/ScrollableContainer";
import { TFeedTab } from "@/types/ui";
import { useState } from "react";
import FeedHeader from "./Children/FeedHeader";
import FeedItem from "./Children/FeedItem";

interface IFeedProps {}
const Feed: React.FC<IFeedProps> = ({}) => {
  const [activeFeed, setActiveFeed] = useState<TFeedTab>("friends");
  return (
    <div>
      <FeedHeader activeFeed={activeFeed} setActiveFeed={setActiveFeed} />
      <div className="mt-2.5">
        <ScrollableContainer>
          <div className="space-y-2">
            {Array(15)
              .fill(0)
              .map((v, i) => (
                <FeedItem key={i} />
              ))}
          </div>
        </ScrollableContainer>
      </div>
    </div>
  );
};
export default Feed;
