import { Restaurant } from "../restaurants/restaurant";

export interface Foods {
    id: number;
    name: string;
    cookTime: string;
    favorite: boolean;
    stars:number;
    imageUrl:string;
    restaurant:Restaurant;
  }