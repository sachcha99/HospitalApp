import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from "./components/header/Header";
import Body from "./components/body/Body";

function App() {
  return (
    <Router>
      
        <Header />
        <Body />
      
    </Router>
  );
}

export default App;
