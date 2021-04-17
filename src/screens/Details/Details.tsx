import React, { useState } from "react";
import {
  View,
  ScrollView,
  Animated,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { heightPercentageToDP as hp } from "Utils/Helper";
import { HomeNavigatorProps } from "Navigation/types";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { COLORS } from "Utils";
console.disableYellowBox = true;

const Details = ({ route, navigation }: HomeNavigatorProps) => {
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
      <Layout style={styles.container}>
        <Animated.View
          style={[
            styles.headerContainer,
            { height: headerHeight, width: SCREEN_WIDTH },
          ]}
        >
          <ImageBackground
            style={{ height: "100%", width: "100%" }}
            source={{ uri: image }}
            //source={require("../../data/emptyImage.jpg")}
          >
            <Animated.View
              style={[styles.backIcon, { opacity: heroTitleOpacity }]}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <FontAwesome
                  name="chevron-left"
                  size={25}
                  color={COLORS.LIGHT_PURPLE}
                />
              </TouchableOpacity>
            </Animated.View>

            <Animated.Text
              style={[styles.titleee, { opacity: heroTitleOpacity }]}
            >
              {title}
            </Animated.Text>

            <Animated.View
              style={[styles.animatedIcon, { opacity: headerTitleOpacity }]}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <FontAwesome
                  name="chevron-left"
                  size={25}
                  color={COLORS.LIGHT_PURPLE}
                />
              </TouchableOpacity>

              <Animated.Text
                style={[styles.title, { opacity: headerTitleOpacity }]}
              >
                {title}
              </Animated.Text>
            </Animated.View>
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
          <Layout style={styles.contentContainer}>
            <Text style={styles.content}>{content}</Text>
          </Layout>
        </ScrollView>
      </Layout>
    </>
  );
};

export default Details;
