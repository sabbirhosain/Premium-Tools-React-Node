import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { Route, Routes } from "react-router-dom"
import './App.css'
import Home from "./Pages/Home/Home"
import PremiumTools from "./Pages/PremiumTools/PremiumTools"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premium-tools" element={<PremiumTools />} />
      </Routes>
    </>
  )
}

export default App