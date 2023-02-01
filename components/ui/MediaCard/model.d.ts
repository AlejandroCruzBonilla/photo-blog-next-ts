import { ImageProps } from '../../../@types';
export interface MediaCardProps {
  url: string;
  title: string
  body?: string
  date?: string
  image: ImageProps
  priority?: boolean;
  target?: "_blank"|"_self"|"_parent"|"_top"
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