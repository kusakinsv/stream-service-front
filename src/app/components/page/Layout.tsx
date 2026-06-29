import type { PropsWithChildren } from "react";

import { LayoutBoxStyled } from "@/app/components/page/LayoutBoxStyled.ts";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <LayoutBoxStyled>
      {children}
    </LayoutBoxStyled>
  );
};