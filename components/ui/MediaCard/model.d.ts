import { ImageProps } from '../../../@types';
export interface MediaCardProps {
  url: string;
  title: string
  body?: string
  date?: string
  image: ImageProps
  // customLoader?: (p: CustomImageLoaderProps) => string
  gridResponsive?:GridResponsive
  maxHeight?: MaxHeight
}

type GridResponsive = {
  xs?: number
  sm?: number
  md?: number
  lg?: number
}

type CustomImageLoaderProps = {
  src: string
  width: number
  quality?: number
}