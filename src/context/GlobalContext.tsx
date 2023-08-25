import { useSetupFooterRect } from "@/components/Main";
import { useSetupWindowSize } from "@/hooks/useWindowSize";
import { createContext, useContext } from "react";

const useGlobalContextValue = () => {
  const useWindowSizeResult = useSetupWindowSize();
  const useFooterRectResult = useSetupFooterRect();
  return { useWindowSizeResult, useFooterRectResult };
};

const GlobalContext = createContext<ReturnType<
  typeof useGlobalContextValue
> | null>(null);

export const useGlobalContext = () => {
  const value = useContext(GlobalContext)!;
  return value;
};
interface IGlobalContextProviderProps {
  children: any;
}
export const GlobalContextProvider: React.FC<IGlobalContextProviderProps> = ({
  children,
}) => {
  const value = useGlobalContextValue();
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
