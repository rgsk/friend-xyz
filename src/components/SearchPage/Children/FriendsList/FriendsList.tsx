import ScrollableContainer from "@/components/Common/ScrollableContainer";
import FriendItem from "./FriendItem";

interface IFriendsListProps {}
const FriendsList: React.FC<IFriendsListProps> = ({}) => {
  return (
    <ScrollableContainer>
      <div className="space-y-3">
        {Array(10)
          .fill(0)
          .map((v, i) => (
            <FriendItem key={i} />
          ))}
      </div>
      <div className="mt-3"></div>
    </ScrollableContainer>
  );
};
export default FriendsList;
