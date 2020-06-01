import React, { FunctionComponent, ReactElement } from "react";
import "./content.css";

type Props = {
  id: string;
  header: string;
  body: string | ReactElement;
  emoji?: ReactElement;
};

const Content: FunctionComponent<Props> = (props) => {
  const { header, body, emoji, id } = props;
  return (
    <div id={id} className="portfolio-details-container">
      <h2 className="header">
        {header} {emoji}
      </h2>
      <div className="body">{body}</div>
    </div>
  );
};

export default Content;
