import React from "react";
import ReactDOM from "react-dom";

import Button from ".";

describe("<Button />", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
