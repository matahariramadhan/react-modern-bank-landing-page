import React from "react";

const Button = ({ styles, children }) => {
  return <button className={styles}>{children}</button>;
};

export default Button;
