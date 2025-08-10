import { useState } from 'react'
import './App.css'
import Header from './components/header/header.jsx'
import Home from './components/home/home.jsx'

const App = () => {
  return (
    <>
      <Header />

        <main className="main">
          <Home />
        </main>
    </>
  );
}

export default App
