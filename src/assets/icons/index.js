import React from "react";

import UnderscoreLg from "./src/UnderscoreLg";
import UnderscoreSm from "./src/UnderscoreSm";

const Icon = (props) => {
  switch (props.name) {
    case "UnderscoreLg":
      return <UnderscoreLg {...props} />;
    case "UnderscoreSm":
      return <UnderscoreSm {...props} />;
    default:
  }
};

export default Icon;
