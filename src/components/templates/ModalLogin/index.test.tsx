import React from "react";
import ReactDOM from "react-dom";

import ModalLogin from ".";

describe("<ModalLogin />", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ModalLogin opened />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
