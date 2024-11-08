export interface IProductsData {
  id: number;
  title: string;
  description: string;
  category: Category;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: AvailabilityStatus;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

export enum AvailabilityStatus {
  InStock = "In Stock",
}

export enum Category {
  MensShirts = "mens-shirts",
  MensShoes = "mens-shoes",
  MensWatches = "mens-watches",
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Meta {
  createdAt: Date;
  updatedAt: Date;
  barcode: string;
  qrCode: string;
}

export interface Review {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
}
