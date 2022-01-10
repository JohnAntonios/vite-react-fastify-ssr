import React, { FC, StrictMode, ReactNode } from "react";
import { PageContext } from "./types";
import { PageContextProvider } from "./usePageContext";

interface PageShellProps {
  children: ReactNode;
  pageContext: PageContext;
}

export const PageShell: FC<PageShellProps> = ({ children, pageContext }) => (
  <StrictMode>
    <PageContextProvider pageContext={pageContext}>
      {children}
    </PageContextProvider>
  </StrictMode>
);
