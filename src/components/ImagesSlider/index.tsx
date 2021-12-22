import { FC, useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";

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

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export const ImagesSlider: FC<ImagesSliderProps> = ({ urls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    setCurrentIndex(info.viewableItems[0].index);
  });

  return (
    <Container>
      <ImageIndexes>
        {urls.map((url, index) => (
          <ImageIndex key={url} isActive={currentIndex === index} />
        ))}
      </ImageIndexes>

      <FlatList
        data={urls}
        keyExtractor={(url) => url}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
        renderItem={({ item: url }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: url }} resizeMode="contain" />
          </CarImageWrapper>
        )}
      />
    </Container>
  );
};
