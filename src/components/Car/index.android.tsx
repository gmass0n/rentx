import { FC } from "react";
import { TouchableNativeFeedback } from "react-native";

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

interface CarProps {
  data: CarDTO;
  onPress(): void;
}

export const Car: FC<CarProps> = ({ data, onPress }) => {
  const MotorIcon = getAccessoryIcon(data.fuel_type as any);

  return (
    <Container rippleColor="transparent">
      <TouchableNativeFeedback onPress={onPress}>
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
      </TouchableNativeFeedback>
    </Container>
  );
};
