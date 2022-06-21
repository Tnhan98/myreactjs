import { Fragment } from "react";

import Header from "./compoments/Header/Header";
import './App.scss'
import Todos from "./compoments/Todos/Todos";

function App() {
  return (
    <Fragment>

      <Header />
      <Todos />
    </Fragment>
  );
}

export default App;
