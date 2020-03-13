import React, { Fragment, Component } from "react";
import "./App.css";

class App extends Component {
  foo = () => "Bars";

  render() {
    let name = "John Doe";
    let loading = false;
    let showName = true;

    // if (loading) {
    //   return <h4>Loading...</h4>;
    // }

    let foo = () => "Bar";

    return (
      <div className='App'>
        {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>}
      </div>
    );
  }
}

export default App;
