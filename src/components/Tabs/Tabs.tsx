import { TTab } from "@/types/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TabItem from "./Children/TabItem/TabItem";

interface ITabsProps {}

const allTabs: TTab[] = ["home", "search", "profile"];
const Tabs: React.FC<ITabsProps> = ({}) => {
  const pathName = usePathname();
  return (
    <div className="flex justify-around items-center">
      {allTabs.map((tab) => {
        const tabPathName = tab === "home" ? "/" : `/${tab}`;
        return (
          <Link key={tab} href={tabPathName}>
            <TabItem type={tab} active={tabPathName === pathName} />
          </Link>
        );
      })}
    </div>
  );
};

export default Tabs;
