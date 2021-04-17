import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import Providers from "Navigation";
import { ThemeContext } from "Context/ThemeProvider";

const App = () => {
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ApplicationProvider {...eva} theme={eva[theme]}>
        <Providers />
      </ApplicationProvider>
    </ThemeContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    textAlign: "center",
  },
});
