"use client";

import { GlobalContextProvider } from "@/context/GlobalContext";
import Main from "./Main";

interface IAppProps {
  children: any;
}
const App: React.FC<IAppProps> = ({ children }) => {
  return (
    <GlobalContextProvider>
      <Main>{children}</Main>
    </GlobalContextProvider>
  );
};
export default App;
