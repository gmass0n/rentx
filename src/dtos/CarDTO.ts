import { CarAccessoryDTO } from "./CarAccessoryDTO";

export interface CarDTO {
  id: string;
  brand: string;
  name: string;
  period: string;
  price: number;
  about: string;
  thumbnail: string;
  accessories: CarAccessoryDTO[];
  photos: string[];
  fuel_type: string;
}
