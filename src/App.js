import Landing from "./components/Landing.jsx";
import Nav from "./components/Nav.jsx";
import Highlights from "./components/Highlights.jsx";
import React from 'react'
import Featured from "./components/Featured.jsx"
import Discounted from "./components/Discounted.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
    </div>
  );
}

/*const Highlights = () => {
  return (
    <div>Highlights</div>
  )
}

export default Highlights */

export default App;
