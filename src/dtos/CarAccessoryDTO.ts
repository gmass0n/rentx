export type CarAccessoryType =
  | "speed"
  | "acceleration"
  | "turning_diameter"
  | "gasoline_motor"
  | "electric_motor"
  | "hybrid_motor"
  | "exchange"
  | "seats";

export interface CarAccessoryDTO {
  id: string;
  type: CarAccessoryType;
  name: string;
}
