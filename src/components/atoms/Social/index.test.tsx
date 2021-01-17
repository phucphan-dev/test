import React from "react";
import ReactDOM from "react-dom";

import Social from ".";

describe("<Social />", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Social type="google" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
