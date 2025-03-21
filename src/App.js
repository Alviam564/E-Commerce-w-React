import Nav from "./components/Nav.jsx";
import React from 'react'
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx"
import Books from "./pages/Books";
import { books } from "./data";
import Bookinfo from "./pages/Bookinfo.jsx";
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router> 
      <div className="App">
          <Nav />
          <Route path='/' exact component={Home} />
          <Route path='/books' exact render={() => <Books books={books} />} />
          <Route path='/books/1' render={() => <Bookinfo books={books} />} />
          <Footer />
      </div>
    </Router>
  );
}

export default App;