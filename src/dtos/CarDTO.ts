import { CarAccessoryDTO } from "./CarAccessoryDTO";

export interface CarDTO {
  id: string;
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  picture: string;
  accesories: CarAccessoryDTO[];
  photo: string;
  fuel_type: string;
}
