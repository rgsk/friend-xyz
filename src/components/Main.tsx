import useWindowSize from "@/hooks/useWindowSize";
import Tabs from "./Tabs/Tabs";

interface IMainProps {
  children: any;
}
const Main: React.FC<IMainProps> = ({ children }) => {
  const { windowHeight } = useWindowSize();
  return (
    <main>
      <div
        className="flex flex-col"
        style={{
          height: "100vh",
          maxHeight: windowHeight || undefined,
        }}
      >
        <div className="flex-grow">{children}</div>
        <div>
          <Tabs />
        </div>
      </div>
    </main>
  );
};
export default Main;
