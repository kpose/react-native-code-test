import { InputProps } from "@ui-kitten/components";
import React from "react";
import { View, Text, Animated } from "react-native";
import styles from "./styles";

interface ImageProps {
  defaultImageSource: any;
  source: any;
  progressiveStyle: any;
}

const defaultImageAnimated = new Animated.Value(0);
const ImageAnimated = new Animated.Value(0);

const handleDefaultImageLoad = () => {
  Animated.timing(defaultImageAnimated, {
    toValue: 1,
    useNativeDriver: true,
  }).start();
};

const handleImageLoad = () => {
  Animated.timing(ImageAnimated, {
    toValue: 1,
    useNativeDriver: true,
  }).start();
};

const ProgressiveImage = (props: ImageProps) => {
  return (
    <View style={styles.container}>
      <Animated.Image
        source={props.defaultImageSource}
        style={[props.progressiveStyle, { opacity: defaultImageAnimated }]}
        onLoad={handleDefaultImageLoad}
        blurRadius={1}
      />

      <Animated.Image
        source={props.source}
        style={[
          props.progressiveStyle,
          { opacity: ImageAnimated },
          styles.imageOverlay,
        ]}
        onLoad={handleImageLoad}
      />
    </View>
  );
};

export default ProgressiveImage;
