import React, { Component } from "react";
import UserContainer from "./containers/UserContainer";
import CreatePage  from "./pages/CreatePage";

class App extends Component {
  render() {
    return (
      <div>
        <CreatePage />
      </div>
    );
  }
}

export default App;
