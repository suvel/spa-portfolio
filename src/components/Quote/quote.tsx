import React, { FunctionComponent, ReactElement, useContext } from "react";
import { ThemeContext } from "../../context";
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
  const theme = useContext(ThemeContext);
  return (
    <div className={`quote-container ${customWrapperStyle}`}>
      <div
        style={{ backgroundImage: `url(${theme && theme.tellerEllipse})` }}
        className="tellerImage-container"
      >
        <img
          className="tellerImage"
          src={image}
          alt={"person that quoted the below quote"}
        />
      </div>
      <div
        style={{ backgroundColor: theme && theme.tertiaryColor }}
        className="quotecontent-container"
      >
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
