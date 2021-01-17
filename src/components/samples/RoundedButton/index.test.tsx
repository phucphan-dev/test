import React from "react";
import ReactDOM from "react-dom";

import RoundedButton from ".";

describe("<RoundedButton />", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RoundedButton color="hotpink" onClick={() => { }}>RoundedButton</RoundedButton>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
