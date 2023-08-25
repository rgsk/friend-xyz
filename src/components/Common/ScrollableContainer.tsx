import useScrollableHeight from "@/hooks/useScrollableHeight";
import { useRef } from "react";

interface IScrollableContainerProps {
  children: any;
}
const ScrollableContainer: React.FC<IScrollableContainerProps> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollableHeight = useScrollableHeight(containerRef);
  return (
    <div
      ref={containerRef}
      style={{
        maxHeight: scrollableHeight,
      }}
      className="overflow-auto"
    >
      {children}
    </div>
  );
};
export default ScrollableContainer;
