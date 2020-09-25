import React from 'react';
import './App.css';
import Home from "../src/Home/Home";
import Nav from "../src/Nav/Nav";
import Form from "../src/Form/Form";
import Jumbotron from './JumboTron/JumboTron';

function App() {
  return (
    <>
    {/* <Home /> */}
    <Nav />
    <Jumbotron />
    <Form />
    </>
  );
}

export default App;
