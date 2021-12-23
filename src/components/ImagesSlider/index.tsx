import { FC, useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";
import { CarPhotoDTO } from "../../dtos/CarPhotoDTO";

import { Bullet } from "../Bullet";

import { Container, ImageIndexes, CarImageWrapper, CarImage } from "./styles";

interface ImagesSliderProps {
  photos: CarPhotoDTO[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export const ImagesSlider: FC<ImagesSliderProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    setCurrentIndex(info.viewableItems[0].index);
  });

  return (
    <Container>
      <ImageIndexes>
        {photos.map((photo, index) => (
          <Bullet key={photo.id} isActive={currentIndex === index} />
        ))}
      </ImageIndexes>

      <FlatList
        data={photos}
        keyExtractor={(photo) => photo.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
        renderItem={({ item: photo }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: photo.photo }} resizeMode="contain" />
          </CarImageWrapper>
        )}
      />
    </Container>
  );
};
