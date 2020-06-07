import React, {
  FunctionComponent,
  useCallback,
  useContext,
  useState,
} from "react";
import { ThemeContext } from "../../context";
import "./themeswitcher.css";

const ThemeSwitcher: FunctionComponent = (props) => {
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState(true);

  const handelOnToggle = useCallback(() => {
    setToggle((toggle) => !toggle);
    theme && theme.setTheme();
  }, [toggle]);
 
  return (
    <div className={"themeswitcher-container"}>
      <div>Theme Switcher</div>
      <div style={{ marginLeft: "2px" }} className={"toggler-container"}>
        <div
          style={{
            backgroundColor: theme && theme.mainColor,
            borderColor: theme && theme.mainColor,
          }}
          className={"toggler"}
        >
          <div
            style={{
              float: toggle ? "left" : "right",
              backgroundColor: theme && theme.mainFontColor,
              borderColor: theme && theme.mainColor,
            }}
            onClick={handelOnToggle}
            className={"switch"}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
