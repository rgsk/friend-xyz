import useScrollableHeight from "@/hooks/useScrollableHeight";
import { useRef } from "react";
import FriendItem from "./FriendItem";

interface IFriendsListProps {}
const FriendsList: React.FC<IFriendsListProps> = ({}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollableHeight = useScrollableHeight(containerRef);
  return (
    <div
      ref={containerRef}
      style={{ maxHeight: scrollableHeight }}
      className="overflow-auto"
    >
      <div className="space-y-3">
        {Array(10)
          .fill(0)
          .map((v, i) => (
            <FriendItem key={i} />
          ))}
      </div>
      <div className="mt-3"></div>
    </div>
  );
};
export default FriendsList;
