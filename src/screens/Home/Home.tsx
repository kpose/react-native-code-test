import React, { useContext, useCallback, useState } from "react";
import { TouchableOpacity, SafeAreaView, FlatList, Switch } from "react-native";
import styles from "./styles";
import { Layout, Text } from "@ui-kitten/components";
import { AuthContext } from "Navigation/AuthProvider";
import { HomeNavigatorProps } from "Navigation/types";
import { Card } from "Components";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP as hp } from "Utils/Helper";
import { ThemeContext } from "Context/ThemeProvider";
import { COLORS } from "Utils";

const data = require("data/blogData.json");

const Home = ({ navigation }: HomeNavigatorProps) => {
  const { logout } = useContext(AuthContext);
  const { toggleTheme } = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const Item_Height = hp(24);

  const toggle = () => {
    setIsEnabled((previousState) => !previousState);
    toggleTheme();
  };

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
        //onPress={() => logout()}
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

      <Layout style={styles.container}>
        <SafeAreaView>
          <Layout style={styles.switchContainer}>
            <Text style={styles.welcomeText}>Welcome, have fun with us!</Text>
            <Switch
              trackColor={{ false: COLORS.WARNING, true: COLORS.BLACK }}
              thumbColor={isEnabled ? COLORS.LIGHT_BLUE : COLORS.WHITE}
              onValueChange={toggle}
              value={isEnabled}
            />
          </Layout>
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
      </Layout>
    </>
  );
};

export default Home;
