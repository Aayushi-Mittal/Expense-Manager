import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddTransaction from "./pages/AddTransaction";
import Home from "./pages/Home";
import FOF from "./pages/FOF";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-transaction" component={AddTransaction} />
        <Route component={FOF} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
