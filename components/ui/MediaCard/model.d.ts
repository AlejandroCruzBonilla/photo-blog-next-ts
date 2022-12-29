import { ImageProps } from '../../../@types';
export interface MediaCardProps {
  url: string;
  title: string
  body?: string
  date?: string
  image: ImageProps
  gridResponsive?:GridResponsive
}

type GridResponsive = {
  xs?: number
  sm?: number
  md?: number
  lg?: number
}