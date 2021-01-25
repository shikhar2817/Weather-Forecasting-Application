import React from 'react';
import './App.css';
// components
import { Header } from './components/HeaderComponent';
import { Footer } from './components/FooterComponent';
import { Main } from './components/MainComponent';

function App() {
  return (
    <div className="App">
      <Header/>
        {/* <Main/> */}
      <Footer/>
    </div>
  );
}

export default App;
