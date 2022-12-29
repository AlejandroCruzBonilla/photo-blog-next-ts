import { textAlign } from "../../../@types";

export interface HeadingPageProps {
  title: string;
  textAlign?: textAlignObj
}

type textAlignObj = {
  xs?: textAlign
  sm?: textAlign
  md?: textAlign
  lg?: textAlign
}