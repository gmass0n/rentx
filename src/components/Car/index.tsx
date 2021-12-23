import { FC } from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import GasolineSVG from "../../assets/gasoline.svg";
import { CarDTO } from "../../dtos/CarDTO";
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

interface CarProps extends RectButtonProps {
  data: CarDTO;
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
            <Period>{data.period}</Period>

            <Price>{`R$ ${data.price}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <Picture source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  );
};
