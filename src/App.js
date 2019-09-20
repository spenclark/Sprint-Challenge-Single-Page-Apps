import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import { Route, Link } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage.js";

export default function App() {
  return (
    <main>
      <Header />
      <Link exact to='/'>Home</Link>
      <Link to='/char'>Characters</Link>
      
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/char' component={CharacterList}/>
    </main>
  );
}
