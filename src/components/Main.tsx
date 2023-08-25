import { useGlobalContext } from "@/context/GlobalContext";
import useResizeObserver from "@/hooks/useResizeObserver";
import useWindowSize from "@/hooks/useWindowSize";
import { useRef } from "react";
import Tabs from "./Tabs/Tabs";

export const useSetupFooterRect = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const footerRect = useResizeObserver(footerRef);
  return { footerRef, footerRect };
};
export const useFooterRect = () => {
  const { useFooterRectResult } = useGlobalContext();
  return useFooterRectResult.footerRect;
};
interface IMainProps {
  children: any;
}

const Main: React.FC<IMainProps> = ({ children }) => {
  const { windowHeight } = useWindowSize();
  const {
    useFooterRectResult: { footerRef },
  } = useGlobalContext();
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
        <div ref={footerRef}>
          <Tabs />
        </div>
      </div>
    </main>
  );
};
export default Main;
