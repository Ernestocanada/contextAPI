import "./App.css";
import { useState } from "react";
import { UserCounter } from "./contextAPI/Context";
import Counter from "./component/counter";
import Componentb from "./component/componentb";
import Context from "./contextAPI/Context.jsx";
import { Container } from "semantic-ui-react";
import ContactView from "./views/contact-view.jsx";
function App() {
  return (
    <div className="App">
      <Context>
        <Counter />
        <Componentb />
      </Context>
      <Container>
        <h1>React Hooks Context Demo</h1>
        <ContactView />
      </Container>
    </div>
  );
}

export default App;
