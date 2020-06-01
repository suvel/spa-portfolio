import React, { FunctionComponent } from "react";
type Prop = {
  label: string;
  symbol: string;
};
const Emoji: FunctionComponent<Prop> = (props) => {
  return (
    <span
        className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  );
};
export default Emoji;
