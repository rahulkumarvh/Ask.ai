import React from "react";

const ModelContext = React.createContext({
  model: null,
  passage: "",
  setPassage: () => {},
});

export default ModelContext;
