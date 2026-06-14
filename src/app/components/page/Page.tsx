import type { PropsWithChildren } from "react";

import { PageBoxStyled } from "@/app/components/page/PageBox.styled.ts";

export const Page = ({ children }: PropsWithChildren) => {
  return (
    <PageBoxStyled>
      {children}
    </PageBoxStyled>
  );
};