import { ImageProps, SafeNumber } from "../../../@types";

export interface ImageContainerProps {
  image: ImageProps
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down"
}