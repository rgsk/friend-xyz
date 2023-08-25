import { useFooterRect } from "@/components/Main";
import { RefObject } from "react";
import useResizeObserver from "./useResizeObserver";
import useWindowSize from "./useWindowSize";

const useScrollableHeight = <T extends HTMLElement>(
  elementRef: RefObject<T>
) => {
  const { windowHeight } = useWindowSize();
  const elementRect = useResizeObserver(elementRef);
  const footerRect = useFooterRect();
  return windowHeight - (footerRect?.height ?? 0) - (elementRect?.top ?? 0);
};
export default useScrollableHeight;
