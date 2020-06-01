import React, { FunctionComponent } from "react";
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
  const {
    backGroundPatter,
    repeatVertical = false,
    backgroundColor = "transparent",
    customStyle = "",
  } = props;
  const direction = repeatVertical ? "x" : "y";
  return (
    <div
      className={`repeatingpatternbackground-container ${customStyle}`}
      style={{
        backgroundImage: `url(${backGroundPatter})`,
        backgroundRepeat: `repeat-${direction}`,
        backgroundColor: `${backgroundColor}`,
      }}
    >
      {props.children}
    </div>
  );
};

export default RepeatingPatternBackgroundContainer;
