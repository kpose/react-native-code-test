import React from "react";
import { StyleSheet } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { ThemeContext } from "Context/ThemeContext";
import Providers from "Navigation";

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
  },
  titleText: {
    textAlign: "center",
  },
});
