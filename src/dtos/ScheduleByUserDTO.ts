import { CarDTO } from "./CarDTO";

export interface ScheduleByUserDTO {
  user_id: number;
  car: CarDTO;
  startDate: string;
  endDate: string;
  id: number;
}
