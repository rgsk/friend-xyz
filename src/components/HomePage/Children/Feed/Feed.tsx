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
      <div className="overflow-auto">
        <div className="space-y-2">
          {Array(15)
            .fill(0)
            .map((v, i) => (
              <FeedItem key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default Feed;
