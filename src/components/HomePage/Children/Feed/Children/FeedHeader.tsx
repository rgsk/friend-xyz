import TextContent from "@/components/Common/TextContent";
import TextTab from "@/components/Common/TextTab";
import { TFeedTab } from "@/types/ui";
import { Dispatch, SetStateAction } from "react";

const allFeedTabs: { type: TFeedTab; label: string }[] = [
  { type: "friends", label: "Friends" },
  { type: "all", label: "All" },
];
interface IFeedHeaderProps {
  activeFeed: TFeedTab;
  setActiveFeed: Dispatch<SetStateAction<TFeedTab>>;
}
const FeedHeader: React.FC<IFeedHeaderProps> = ({
  activeFeed,
  setActiveFeed,
}) => {
  return (
    <div className="flex justify-between">
      <div>
        <TextContent element="span" variant="16">
          FEED ⚡️
        </TextContent>
      </div>
      <div className="space-x-6">
        {allFeedTabs.map(({ label, type }) => (
          <TextTab
            key={type}
            label={label}
            active={activeFeed === type}
            onClick={() => {
              setActiveFeed(type);
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default FeedHeader;
