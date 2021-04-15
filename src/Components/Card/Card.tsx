import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";
import styles from "./styles";
const defaultImage = require("../../data/emptyImage.jpg");

type CardProps = {
  blog: any;
};

const Card = (props: CardProps) => {
  const data = props.blog;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      {/* <Image source={{ uri: data.imageUrl }} style={styles.image} /> */}
      <ProgressiveImage
        defaultImageSource={require("../../data/image_large.png")}
        source={{ uri: data.imageUrl }}
        progressiveStyle={styles.image}
      />
    </View>
  );
};

export default Card;
