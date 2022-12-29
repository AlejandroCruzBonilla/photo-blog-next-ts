import { ReactElement } from "react";
import { SeoProps } from "../../../@types";

export interface MainLayoutProps {
  children: ReactElement | ReactElement[],
  seo: SeoProps
}