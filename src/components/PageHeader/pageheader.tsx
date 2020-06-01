import React, { FunctionComponent } from "react";
import './pageheader.css'
type Props = {
  customStyle?: string;
};

const PageHeader: FunctionComponent<Props> = (props) => {
  const { customStyle } = props;
  return <h1 className={`page-header ${customStyle}`}>{props.children}</h1>;
};

export default PageHeader;
