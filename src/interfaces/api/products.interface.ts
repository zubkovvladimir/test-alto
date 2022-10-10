export interface ProductBase {
  name: string;
  price: number;
  image_url: string;
  image_width: number;
  image_height: number;
  short_desc: string;
  availability: number;
  color: string;
}

export interface Product extends ProductBase {
  id: number;
}
