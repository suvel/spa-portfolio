import React, {
  FunctionComponent,
  useState,
  createContext,
  useCallback,
  useEffect,
} from "react";

type themeProps = {
  themeName: string;
  mainColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  mainFontColor: string;
  secondaryFontColor: string;
  tellerEllipse: string;
  menuBarIcon: string;
  setTheme: () => void;
};

export const ThemeContext = createContext<themeProps | undefined>(undefined);

const theme = {
  lightTheme: {
    themeName: "lightTheme",
    mainColor: "#0060f3",
    secondaryColor: "#1B45AE",
    tertiaryColor: "white",
    mainFontColor: "white",
    secondaryFontColor: "black",
    tellerEllipse: require("../assets/images/Ellipse.svg"),
    menuBarIcon: require("../assets/images/menubar.svg"),
  },
  darkTheme: {
    themeName: "darkTheme",
    mainColor: "#0E2C46",
    secondaryColor: "#803343",
    tertiaryColor: "#F16529",
    mainFontColor: "#F16529",
    secondaryFontColor: "black",
    tellerEllipse: require("../assets/images/Ellipse-darktheme.svg"),
    menuBarIcon: require("../assets/images/menubar-darktheme.svg"),
  },
};

const getTheme = (themeType: string) => {
  if (themeType === "darkTheme") return theme.darkTheme;
  return theme.lightTheme;
};

const ThemeContextProvider: FunctionComponent = (props) => {
  const [themeType, setThemeType] = useState<"lightTheme" | "darkTheme">(
    "lightTheme"
  );
  const handelSetTheme = useCallback(() => {
    setThemeType((themeStyle) => {
      if (themeStyle === "lightTheme") return "darkTheme";
      return "lightTheme";
    });
  }, [themeType]);

  return (
    <ThemeContext.Provider
      value={{ ...getTheme(themeType), setTheme: handelSetTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
