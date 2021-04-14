import React, { useContext, useEffect, useCallback, useRef } from "react";
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  View,
  Switch,
} from "react-native";
import { AuthContext } from "Navigation/AuthProvider";
import { HomeNavigatorProps } from "Navigation/types";
import { Card } from "Components";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP as hp } from "Utils/Helper";
import LottieView from "lottie-react-native";

const data = require("data/blogData.json");

const Home = ({ navigation }: HomeNavigatorProps) => {
  const { user, logout } = useContext(AuthContext);
  const Item_Height = hp(24);

  const getItemLatout = useCallback(
    (data, index) => ({
      length: Item_Height,
      offset: Item_Height * index,
      index,
    }),
    []
  );

  const renderItem = useCallback(
    ({ item }: any) => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            title: item.title,
            image: item.imageUrl,
            content: item.content,
          })
        }
      >
        <Card blog={item} />
      </TouchableOpacity>
    ),
    []
  );

  const keyExtractor = useCallback((item) => item.views.toString(), []);
  return (
    <>
      <StatusBar hidden />
      <SafeAreaView style={styles.container}>
        <View style={styles.switchContainer}>
          <Switch trackColor={{ false: "red", true: "blue" }} />
        </View>
        <FlatList
          data={data.blogs}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          getItemLayout={getItemLatout}
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
          maxToRenderPerBatch={6}
          windowSize={10}
        />
      </SafeAreaView>
    </>
  );
};

export default Home;
