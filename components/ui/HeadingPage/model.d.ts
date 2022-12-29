import { textAlign } from "../../../@types";

export interface HeadingPageProps {
  title: string
  variant?: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | undefined
  textAlign?: textAlignObj
}

type textAlignObj = {
  xs?: textAlign
  sm?: textAlign
  md?: textAlign
  lg?: textAlign
}