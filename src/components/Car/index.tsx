import { FC } from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { CarDTO } from "../../dtos/CarDTO";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import {
  Container,
  Content,
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
  onPress(): void;
}

export const Car: FC<CarProps> = ({ data, onPress }) => {
  const MotorIcon = getAccessoryIcon(data.fuel_type as any);

  return (
    <Container onPress={onPress}>
      <Content>
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
      </Content>
    </Container>
  );
};
