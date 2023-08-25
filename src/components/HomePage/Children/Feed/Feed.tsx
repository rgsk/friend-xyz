import { useFooterRect } from "@/components/Main";
import useResizeObserver from "@/hooks/useResizeObserver";
import useWindowSize from "@/hooks/useWindowSize";
import { TFeedTab } from "@/types/ui";
import { useRef, useState } from "react";
import FeedHeader from "./Children/FeedHeader";
import FeedItem from "./Children/FeedItem";

interface IFeedProps {}
const Feed: React.FC<IFeedProps> = ({}) => {
  const [activeFeed, setActiveFeed] = useState<TFeedTab>("friends");
  const { windowHeight } = useWindowSize();
  const containerRef = useRef<HTMLDivElement>(null);
  const containerRect = useResizeObserver(containerRef);
  const footerRect = useFooterRect();

  return (
    <div>
      <FeedHeader activeFeed={activeFeed} setActiveFeed={setActiveFeed} />
      <div className="mt-2.5">
        <div
          ref={containerRef}
          style={{
            maxHeight:
              windowHeight -
              (footerRect?.height ?? 0) -
              (containerRect?.top ?? 0),
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
