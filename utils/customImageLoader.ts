
export const imagekitIoLoader = (p: CustomImageLoaderProps) => {
  const { src, width, quality } = p
  return `https://ik.imagekit.io/ncbphotography/tr:q-${quality},w-${width}/${src}`; // REPLACE WITH YOUR IMAGE DIRECTORY
}


type CustomImageLoaderProps = {
  src: string
  width: number
  quality?: number | 50
}