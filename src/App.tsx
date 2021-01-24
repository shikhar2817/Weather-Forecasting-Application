import React from 'react';
import './App.css';
// components
import { Header } from "../src/components/header/HeaderComponent";
import { Footer } from '../src/components/footer/FooterComponent';
import { Main } from '../src/components/main/MainComponent';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
