import colors from "@/constants/colors";
import HomeIcon from "./Children/HomeIcon";
import ProfileIcon from "./Children/ProfileIcon";
import SearchIcon from "./Children/SearchIcon";

export interface ITabItemIconProps {
  color: string;
}

interface ITabItemProps {
  type: "home" | "search" | "profile";
  active?: boolean;
}
const TabItem: React.FC<ITabItemProps> = ({ type, active = false }) => {
  const Icon =
    type === "home"
      ? HomeIcon
      : type === "search"
      ? SearchIcon
      : type === "profile"
      ? ProfileIcon
      : null;
  if (!Icon) {
    return null;
  }
  return <Icon color={active ? colors.primary : "white"} />;
};
export default TabItem;
