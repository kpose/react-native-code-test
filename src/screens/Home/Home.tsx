import React, { useContext, useEffect, useCallback } from "react";
import { Text, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import { AuthContext } from "Navigation/AuthProvider";
import { HomeNavigatorProps } from "../../Navigation/types";
import styles from "./styles";
import { Card } from "Components";
import { heightPercentageToDP as hp } from "Utils/Helper";

const data = require("../../data/blogData.json");

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
            data: item,
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
    <SafeAreaView style={styles.container}>
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
  );
};

export default Home;

{
  /* <TouchableOpacity onPress={() => logout()} style={styles.touch}>
  <Text>welcome user {user.uid}</Text>
</TouchableOpacity> */
}
