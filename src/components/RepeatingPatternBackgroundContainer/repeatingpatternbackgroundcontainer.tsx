import React, { FunctionComponent, useContext } from "react";
import { ThemeContext } from "../../context";
import "./repeatingpatternbackgroundcontainer.css";
type Props = {
  backGroundPatter: HTMLImageElement;
  repeatVertical?: boolean;
  backgroundColor?: string;
  customStyle?: string;
};

const RepeatingPatternBackgroundContainer: FunctionComponent<Props> = (
  props
) => {
  const { backGroundPatter, repeatVertical = false, customStyle = "" } = props;

  const direction = repeatVertical ? "x" : "y";

  const themeColor = useContext(ThemeContext);

  return (
    <div
      className={`repeatingpatternbackground-container ${customStyle}`}
      style={{
        backgroundImage: `url(${backGroundPatter})`,
        backgroundRepeat: `repeat-${direction}`,
        backgroundColor: `${themeColor && themeColor.mainColor}`,
      }}
    >
      {props.children}
    </div>
  );
};

export default RepeatingPatternBackgroundContainer;
