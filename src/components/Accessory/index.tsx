import { FC } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { SvgProps } from "react-native-svg";

import { Container, Name } from "./styles";

interface AccessoryProps {
  name: string;
  icon: FC<SvgProps>;
}

export const Accessory: FC<AccessoryProps> = ({ name, icon: Icon }) => {
  return (
    <Container>
      <Icon width={RFValue(32)} height={RFValue(32)} />

      <Name>{name}</Name>
    </Container>
  );
};
