import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/header/header'
import Home from './components/home/home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import ProjectDetail from './components/portfolio/ProjectDetail'

const MainPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App
