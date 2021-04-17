import React from "react";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";
import { Layout, Text } from "@ui-kitten/components";
import styles from "./styles";

type CardProps = {
  blog: any;
};

const Card = (props: CardProps) => {
  const data = props.blog;

  return (
    <Layout style={styles.container}>
      <Layout style={styles.titleHeader}>
        <Text style={styles.title}>{data.title}</Text>
      </Layout>

      <ProgressiveImage
        defaultImageSource={require("../../data/image_large.png")}
        source={{ uri: data.imageUrl }}
        progressiveStyle={styles.image}
      />
    </Layout>
  );
};

export default Card;
