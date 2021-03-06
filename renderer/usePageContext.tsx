// `usePageContext` allows us to access `pageContext` in any React component.
// More info: https://vite-plugin-ssr.com/pageContext-anywhere

import React, { useContext } from "react";
import type { PageContext } from "./types";

const Context = React.createContext<PageContext>(null);

export const PageContextProvider = ({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: React.ReactNode;
}) => <Context.Provider value={pageContext}>{children}</Context.Provider>;

export const usePageContext = () => {
  const pageContext = useContext(Context);
  return pageContext;
};
