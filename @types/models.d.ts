/*  Pages  */

/*  Home  Page  */
export interface HomeProps {
  data: {
    title: string
    body: string
    image: ImageProps
    images: ImageProps[]
    seo: SeoProps
  }
}

/*  Articles Page  */
export interface ArticlesProps {
  data: {
    title: string
    body: string
    articles: ArticleProps[]
    seo: SeoProps
  }
}

/*  Article  Page  */
export interface ArticleProps {
  data: {
    url: string
    title: string
    body: string
    date?: string
    image: ImageProps
    seo: SeoProps
  }
}

/*  Galleries  Page  */
export interface GalleriesProps {
  data: {
    title: string
    body: string
    galleries: Galleries[]
    seo: SeoProps
  }
}


/*  Gallery  Page  */
export interface GalleryProps {
  data: {
    url: string
    title: string
    body: string
    date?: string
    image: ImageProps
    images: ImageProps[]
    seo: SeoProps
  }
}

/*  Contact  Page  */
export interface ContactProps {
  data: {
    title: string
    body: string
    image: ImageProps
    seo: SeoProps
  }
}



/*  Common  */

export interface Galleries {
  category: GalleryCategory
  galleries: GalleryProps[]
}

export interface GalleryCategory {
  icon: string
  label: string
  value: number
}

export interface ImageProps {
  src: string
  alt: string
  width: number
  height: number
  base64?: string
  type?: string
}

export interface SeoProps {
  title: string
  description: string
}

export type SafeNumber = number | `${number}`;


export type textAlign = "right" | "left" | "center" | "inherit" | "justify" | undefined