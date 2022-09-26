import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Linda",
        },
        {
          name: "Frank",
        },
        {
          name: "Jacky",
        },
        {
          name: "Andrei",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(({ name }, key) => {
          return <h1 key={key}>{name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
