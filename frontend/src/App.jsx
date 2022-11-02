import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/home/Home"
import ImageGenerator from "./components/generator/ImageGenerator"
import History from "./components/history/History"
import {header} from "./components/deprecated/header"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";


const App = () => {

  return (
    <Router>
      <Navigation/>
      <header/>
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route exact path="/monet/history" element = {<History/>}/>
        <Route exact path="/monet/generator" element = {<ImageGenerator/>}/>
        {/* <Route exact path="/vanGogh/history" element = {<Home/>}/>
        <Route exact path="/vanGogh/generator" element = {<Home/>}/> */}
      </Routes>
    </Router>
  );
};

export default App;
