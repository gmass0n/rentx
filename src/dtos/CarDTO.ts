import { CarAccessoryDTO } from "./CarAccessoryDTO";
import { CarPhotoDTO } from "./CarPhotoDTO";

export interface CarDTO {
  id: string;
  brand: string;
  name: string;
  period: string;
  price: number;
  about: string;
  thumbnail: string;
  accessories: CarAccessoryDTO[];
  photos: CarPhotoDTO[];
  fuel_type: string;
}
