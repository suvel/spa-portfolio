import React, { FunctionComponent, ReactElement } from "react";
import "./quote.css";

type Props = {
  quote: string;
  by: string;
  image: string;
  customWrapperStyle?: string;
  extra?: ReactElement;
};

const Quote: FunctionComponent<Props> = (props) => {
  const { customWrapperStyle = "", image, quote, by, extra } = props;
  return (
    <div className={`quote-container ${customWrapperStyle}`}>
      <div className="tellerImage-container">
        <img
          className="tellerImage"
          src={image}
          alt={"person that quoted the below quote"}
        />
      </div>
      <div className="quotecontent-container">
        <div className="quote">
          <p>
            "{quote}"<br />
            <span className="name-container">-{by}</span>
          </p>
        </div>
        {extra && <div className="extra-container">{extra}</div>}
      </div>
    </div>
  );
};

export default Quote;
