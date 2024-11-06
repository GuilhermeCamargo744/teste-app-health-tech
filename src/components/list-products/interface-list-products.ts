import { IProductsData } from "@/src/utils/store/slices/products-data/interface-products-data";

export interface IListProducts {
  formatedData: { title: string; data: IData }[];
}

export interface IData {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  dimensions: Dimensions;
  discountPercentage: number;
  id: number;
  images: string[];
  meta: Meta;
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: Review[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
}

export interface Dimensions {
  depth: number;
  height: number;
  width: number;
}

export interface Meta {
  barcode: string;
  createdAt: Date;
  qrCode: string;
  updatedAt: Date;
}

export interface Review {
  comment: string;
  date: Date;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
}
