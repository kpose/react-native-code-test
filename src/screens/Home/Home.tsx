import React, {
  useContext,
  useEffect,
  useCallback,
  useRef,
  useState,
} from "react";
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
import { ThemeContext } from "Context/ThemeContext";
import { COLORS } from "Utils";
ThemeContext;
//import LottieView from "lottie-react-native";

const data = require("data/blogData.json");

const Home = ({ navigation }: HomeNavigatorProps) => {
  const { user, logout } = useContext(AuthContext);
  const themeContext = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(false);
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

  const toggle = () => {
    themeContext.toggleTheme;
    setIsEnabled((previousState) => !previousState);
  };

  const keyExtractor = useCallback((item) => item.views.toString(), []);
  return (
    <>
      <StatusBar hidden />
      <SafeAreaView style={styles.container}>
        <View style={styles.switchContainer}>
          <Text style={styles.welcomeText}>Welcome, have fun with us!</Text>
          <Switch
            trackColor={{ false: COLORS.WARNING, true: COLORS.BLACK }}
            thumbColor={isEnabled ? COLORS.LIGHT_BLUE : COLORS.DARK_GRAY}
            onValueChange={toggle}
            value={isEnabled}
          />
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
