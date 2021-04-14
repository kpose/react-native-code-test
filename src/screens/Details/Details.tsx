import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Animated,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import { heightPercentageToDP as hp } from "Utils/Helper";
import { HomeNavigatorProps } from "../../Navigation/types";
import styles from "./styles";

const Details = ({ route }: HomeNavigatorProps) => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const data = route.params.data;
  const HEADER_EXPANDED_HEIGHT = hp(30);
  const HEADER_COLLASPED_HEIGHT = hp(10);
  const { width: SCREEN_WIDTH } = Dimensions.get("screen");

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLASPED_HEIGHT],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLASPED_HEIGHT],
    extrapolate: "clamp",
  });

  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLASPED_HEIGHT],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const heroTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLASPED_HEIGHT],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.headerContainer,
          { height: headerHeight, width: SCREEN_WIDTH },
        ]}
      >
        <ImageBackground
          style={{ height: "100%", width: "100%" }}
          source={{ uri: data.imageUrl }}
        >
          <Animated.Text
            style={[styles.title, { opacity: headerTitleOpacity }]}
          >
            {data.title}
          </Animated.Text>

          <Animated.Text
            style={[styles.titleee, { opacity: heroTitleOpacity }]}
          >
            {data.title}
          </Animated.Text>
        </ImageBackground>
      </Animated.View>

      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          { paddingTop: HEADER_EXPANDED_HEIGHT },
        ]}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: scrollY,
              },
            },
          },
        ])}
        scrollEventThrottle={16}
      >
        <Text>This is sub heading</Text>
        <Text>{data.content}</Text>
      </ScrollView>
    </View>
  );
};

export default Details;
