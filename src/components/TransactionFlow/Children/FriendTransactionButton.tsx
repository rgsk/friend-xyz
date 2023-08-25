import HollowButton from "@/components/Common/HollowButton";
import TextContent from "@/components/Common/TextContent";

interface IFriendTransactionButtonProps {}
const FriendTransactionButton: React.FC<
  IFriendTransactionButtonProps
> = ({}) => {
  return (
    <HollowButton>
      <div className="py-1">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex space-x-4 items-center">
              <div>
                <img
                  src="/profile-2.png"
                  alt="apple"
                  className="w-9 h-9 rounded-full"
                />
              </div>
              <div className="flex flex-col items-start">
                <TextContent variant="16" element="span">
                  Shareef Shameem
                </TextContent>
                <TextContent
                  variant="12"
                  element="span"
                  className="text-gray-light"
                >
                  12 KEYS
                </TextContent>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded px-4 py-1 border border-gray-light">
              $480.49
            </div>
          </div>
        </div>
      </div>
    </HollowButton>
  );
};
export default FriendTransactionButton;
