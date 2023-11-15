import { Categories } from "../categories/categories";

export interface Fruits {
    id: number;
    name: string;
    quantity: number;
    price: number;
    category:Categories;
  }