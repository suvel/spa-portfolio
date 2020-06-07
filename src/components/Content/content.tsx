import React, { FunctionComponent, ReactElement, useContext } from "react";
import { ThemeContext } from "../../context";
import "./content.css";

type ContentProps = {
  id: string;
  header: string;
  body: string | ReactElement;
  emoji?: ReactElement;
};

type ContentContainerProps = {
  id?: string;
};

export const ContentContainer: FunctionComponent<ContentContainerProps> = (
  props
) => {
  const { id } = props;
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        WebkitTextStrokeColor: theme && theme.secondaryFontColor,
        WebkitTextFillColor: theme && theme.mainFontColor,
      }}
      id={id ? id : ""}
      className="portfolio-details-container"
    >
      {props.children}
    </div>
  );
};

type ContentHeaderProps = {
  header: string;
  emoji?: ReactElement;
};

export const ContentHeader: FunctionComponent<ContentHeaderProps> = (props) => {
  const { header, emoji } = props;
  return (
    <h2 className="header">
      {header} {emoji}
    </h2>
  );
};

const Content: FunctionComponent<ContentProps> = (props) => {
  const { header, body, emoji, id } = props;
  const theme = useContext(ThemeContext);
  return (
    <ContentContainer id={id}>
      <ContentHeader header={header} emoji={emoji} />
      <div style={{ color: theme && theme.mainFontColor }} className="body">
        {body}
      </div>
    </ContentContainer>
  );
};

export default Content;
