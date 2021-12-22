import { FC } from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import GasolineSVG from "../../assets/gasoline.svg";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  Picture,
} from "./styles";

interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  fuel_type: string;
  picture: string;
}

interface CarProps extends RectButtonProps {
  data: CarData;
}

export const Car: FC<CarProps> = ({ data, ...rest }) => {
  const MotorIcon = getAccessoryIcon(data.fuel_type as any);

  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>

        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>

            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <Picture source={{ uri: data.picture }} resizeMode="contain" />
    </Container>
  );
};
