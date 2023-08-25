import TextContent from "@/components/Common/TextContent";

interface IFriendItemProps {}
const FriendItem: React.FC<IFriendItemProps> = ({}) => {
  const name = "Ishmam Rashid";
  return (
    <div>
      <div className="flex space-x-2 items-center">
        <div>
          <img
            src="/sample-profile.png"
            alt={name}
            className="w-9 h-9 rounded-full"
          />
        </div>
        <div className="flex-grow">
          <div>
            <TextContent element="span" variant="16">
              {name}
            </TextContent>
          </div>
          <div className="flex justify-between">
            <div>
              <TextContent variant="12" element="span">
                <span className="text-primary">+190</span>{" "}
                <span className="text-gray-light">BUYERS TODAY</span>
              </TextContent>
            </div>
            <div>
              <TextContent
                variant="12"
                element="span"
                className="text-gray-light"
              >
                1.98ETH
              </TextContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FriendItem;
