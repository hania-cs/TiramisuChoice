import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import About from "./components/About"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Menu from "./components/Menu"

// Home page component with all main sections
function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <About />
      <CTA />
      <Footer />
    </>
  )
}

// Menu page component
function MenuPage() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  )
}

// Contact page component


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
