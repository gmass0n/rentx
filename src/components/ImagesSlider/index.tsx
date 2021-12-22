import { FC } from "react";

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from "./styles";

interface ImagesSliderProps {
  urls: string[];
}

export const ImagesSlider: FC<ImagesSliderProps> = ({ urls }) => {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex isActive={true} />
        <ImageIndex isActive={false} />
        <ImageIndex isActive={false} />
        <ImageIndex isActive={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage source={{ uri: urls[0] }} resizeMode="contain" />
      </CarImageWrapper>
    </Container>
  );
};
