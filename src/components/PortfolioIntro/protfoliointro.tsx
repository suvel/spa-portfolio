import React, { FunctionComponent, ReactElement, useContext } from "react";
import { ThemeContext } from "../../context";
import "./protfoliointro.css";

type PortfolioIntroProps = {
  introText: string;
  name: string;
  profession: string;
  extra: ReactElement;
  containerCustomStyle?: string;
};

const PortfolioIntro: FunctionComponent<PortfolioIntroProps> = (props) => {
  const { introText, name, profession, extra, containerCustomStyle } = props;
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{ color: theme && theme.mainFontColor }}
      className={`intro-paragraph ${containerCustomStyle}`}
    >
      <p>
        <span>{`${introText}`}</span>
        <br />
        <span className={"weight-regular"}>{`${name}`}</span>
        <br />
        <span className={"weight-regular"}>{`${profession}`}</span>
        <br />
        {extra}
      </p>
    </div>
  );
};

export default PortfolioIntro;
