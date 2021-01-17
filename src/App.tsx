import React, { useState } from "react";
import { Provider } from "react-redux";

import "./App.scss";
import Button from "components/atoms/Button";
import ModalLogin from "components/templates/ModalLogin";
import store from "store";

const App:React.FC = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="App">
      <Button handleClick={() => setOpened(true)}>Login</Button>
      <ModalLogin opened={opened} handleClose={() => setOpened(false)} />
    </div>
  );
};

const AppWrapper:React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
