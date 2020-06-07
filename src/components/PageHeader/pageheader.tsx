import React, { FunctionComponent, useContext } from "react";
import { ThemeContext } from "../../context";
import "./pageheader.css";
type Props = {
  customStyle?: string;
};

const PageHeader: FunctionComponent<Props> = (props) => {
  const fontColor = useContext(ThemeContext);
  const { customStyle } = props;
  return (
    <h1
      style={{ color: fontColor && fontColor.mainFontColor }}
      className={`page-header ${customStyle}`}
    >
      {props.children}
    </h1>
  );
};

export default PageHeader;
