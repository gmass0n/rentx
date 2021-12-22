import { FC } from "react";

import GasolineSVG from "../../assets/gasoline.svg";

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
  picture: string;
}

interface CarProps {
  data: CarData;
}

export const Car: FC<CarProps> = ({ data }) => {
  return (
    <Container>
      <Details>
        <Brand>{data.brand}</Brand>

        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>

            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <GasolineSVG />
          </Type>
        </About>
      </Details>

      <Picture source={{ uri: data.picture }} resizeMode="contain" />
    </Container>
  );
};
