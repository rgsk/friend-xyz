import useResizeObserver from "@/hooks/useResizeObserver";
import useWindowSize from "@/hooks/useWindowSize";
import { DependencyList, useRef } from "react";
import { useFooterRect } from "../Main";

interface IScrollableContainerProps {
  children: any;
  excludeFooterHeight?: boolean;
  deps?: DependencyList | undefined;
}
const ScrollableContainer: React.FC<IScrollableContainerProps> = ({
  children,
  excludeFooterHeight = true,
  deps,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { windowHeight } = useWindowSize();
  const containerRect = useResizeObserver(containerRef, deps);
  const footerRect = useFooterRect();
  const height =
    windowHeight -
    (excludeFooterHeight ? footerRect?.height ?? 0 : 0) -
    (containerRect?.top ?? 0);
  return (
    <div
      ref={containerRef}
      style={{
        height: height,
      }}
      className="overflow-auto"
    >
      {children}
    </div>
  );
};
export default ScrollableContainer;
