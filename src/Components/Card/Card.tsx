import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

type CardProps = {
  blog: any;
};

const Card = (props: CardProps) => {
  const data = props.blog;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <Image source={{ uri: data.imageUrl }} style={styles.image} />
    </View>
  );
};

export default Card;
