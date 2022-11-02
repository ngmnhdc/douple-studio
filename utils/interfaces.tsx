export interface IProduct {
  id: number,
  name: string,
  image: string,
  price: string,
  url: string
}

export interface IProductDetail {
  id: number,
  name: string,
  image: string,
  price: string,
  category: string,
  colors: Array<{ id: string, name: string }>,
  image_list: Array<string>,
  description: string,
  url: string
}