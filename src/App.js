import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import Singleproduct from "./SingleProduct/Singleproduct";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Body />
          </Route>
          <Route path='/:id'>
            <Singleproduct />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
