import Tabs from "./Tabs/Tabs";

interface IMainProps {
  children: any;
}
const Main: React.FC<IMainProps> = ({ children }) => {
  return (
    <main>
      <div className="flex flex-col" style={{ height: window.innerHeight }}>
        <div className="flex-grow">{children}</div>
        <div>
          <Tabs />
        </div>
      </div>
    </main>
  );
};
export default Main;
