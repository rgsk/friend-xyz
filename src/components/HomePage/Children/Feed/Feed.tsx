import useScrollableHeight from "@/hooks/useScrollableHeight";
import { TFeedTab } from "@/types/ui";
import { useRef, useState } from "react";
import FeedHeader from "./Children/FeedHeader";
import FeedItem from "./Children/FeedItem";

interface IFeedProps {}
const Feed: React.FC<IFeedProps> = ({}) => {
  const [activeFeed, setActiveFeed] = useState<TFeedTab>("friends");
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollableHeight = useScrollableHeight(containerRef);
  return (
    <div>
      <FeedHeader activeFeed={activeFeed} setActiveFeed={setActiveFeed} />
      <div className="mt-2.5">
        <div
          ref={containerRef}
          style={{
            maxHeight: scrollableHeight,
          }}
          className="overflow-auto"
        >
          <div className="space-y-2">
            {Array(15)
              .fill(0)
              .map((v, i) => (
                <FeedItem key={i} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feed;
