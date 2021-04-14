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
import { HomeNavigatorProps } from "Navigation/types";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { COLORS } from "Utils";

const Details = ({ route }: HomeNavigatorProps) => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const { title, content, image } = route.params;
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
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.headerContainer,
            { height: headerHeight, width: SCREEN_WIDTH },
          ]}
        >
          <ImageBackground
            style={{ height: "100%", width: "100%" }}
            source={{ uri: image }}
          >
            <Animated.Text
              style={[styles.title, { opacity: headerTitleOpacity }]}
            >
              {title}
            </Animated.Text>

            {/* <FontAwesome
              name="chevron-left"
              size={25}
              color={COLORS.LIGHT_BLUE}
            /> */}
            <Animated.Text
              style={[styles.titleee, { opacity: heroTitleOpacity }]}
            >
              {title}
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
          <Text>{content}</Text>
        </ScrollView>
      </View>
    </>
  );
};

export default Details;
