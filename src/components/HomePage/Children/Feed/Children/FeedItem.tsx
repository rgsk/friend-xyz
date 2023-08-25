import TextContent from "@/components/Common/TextContent";

interface IFeedItemProps {}
const FeedItem: React.FC<IFeedItemProps> = ({}) => {
  return (
    <div>
      <div>
        <TextContent variant="14" element="span">
          <span className="text-primary">Omar Waseem</span> bought 1 Furqan
          Rydhan share
        </TextContent>
      </div>
      <div className="flex justify-between">
        <TextContent variant="14" element="span" className="text-gray-light">
          10 USD
        </TextContent>
        <TextContent variant="14" element="span" className="text-gray-light">
          14m ago
        </TextContent>
      </div>
    </div>
  );
};
export default FeedItem;
