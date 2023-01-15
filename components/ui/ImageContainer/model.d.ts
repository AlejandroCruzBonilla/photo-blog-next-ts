import { ImageProps, SafeNumber } from "../../../@types";
import { StandardLonghandProperties } from '@mui/material'
export interface ImageContainerProps {
  image: ImageProps
  // customLoader?: (p: CustomImageLoaderProps) => string
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down"
  placeholder?: "blur" | "empty"
  priority?: boolean
  maxHeight?: MaxHeight
}

type CustomImageLoaderProps = {
  src: string
  width: number
  quality?: number
}