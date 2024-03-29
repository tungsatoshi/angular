import { Category } from './Category';

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: {
    title: string;
  };
  rating: {
    rate: number;
    count: number;
  };
};

export type Laptop = {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  brand: string;
};

export type ProductAdmin = Omit<Product, 'id' | 'rating'> & {
  _id: string;
  category: Category;
  rate: number;
};

export type CreateProductForm = Omit<Product, 'id' | 'rating' | 'category'> & {
  rate: number;
  category: string;
};
