import React from "react";

const NavigateRef = React.createRef();
const navigate = (name, params) => NavigateRef.current?.navigate(name, params);

export default {
  NavigateRef,
  navigate,
};
