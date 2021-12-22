import { CarAccessoryDTO } from "./CarAccessoryDTO";
import { CarRentDTO } from "./CarRentDTO";

export interface CarDTO {
  id: string;
  brand: string;
  name: string;
  rent: CarRentDTO;
  about: string;
  picture: string;
  accessories: CarAccessoryDTO[];
  photos: string[];
  fuel_type: string;
}
