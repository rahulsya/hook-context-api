import React from "react";
import { Container } from "semantic-ui-react";

import CounterView from "./views/counter-view";

function App() {
  return (
    <Container>
      <h1>hooks context</h1>
      <CounterView />
    </Container>
  );
}

export default App;
