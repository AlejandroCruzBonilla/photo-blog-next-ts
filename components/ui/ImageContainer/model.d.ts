import { ImageProps, SafeNumber } from "../../../@types";
import {StandardLonghandProperties} from  '@mui/material'
export interface ImageContainerProps {
  image: ImageProps
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down"
  placeholder?: "blur" | "empty"
  priority?: boolean
  maxHeight?: MaxHeight
}
