import { FC } from "react";
import { SvgProps } from "react-native-svg";

import SpeedSVG from "../assets/speed.svg";
import AccelerationSVG from "../assets/acceleration.svg";
import ForceSVG from "../assets/force.svg";
import GasolineSVG from "../assets/gasoline.svg";
import ExchangeSVG from "../assets/exchange.svg";
import PeopleSVG from "../assets/people.svg";
import EnergySVG from "../assets/energy.svg";
import HybridSVG from "../assets/hybrid.svg";
import CarSVG from "../assets/car.svg";

import { CarAccessoryType } from "../dtos/CarAccessoryDTO";

const accessoryByType: Record<CarAccessoryType, FC<SvgProps>> = {
  speed: SpeedSVG,
  acceleration: AccelerationSVG,
  turning_diameter: ForceSVG,
  gasoline_motor: GasolineSVG,
  electric_motor: EnergySVG,
  hybrid_motor: HybridSVG,
  exchange: ExchangeSVG,
  seats: PeopleSVG,
};

export const getAccessoryIcon = (type: CarAccessoryType) =>
  accessoryByType[type] || CarSVG;
