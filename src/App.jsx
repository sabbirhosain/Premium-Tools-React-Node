import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { Route, Routes } from "react-router-dom"
import './App.css'
import Home from "./Pages/Home/Home"
import PremiumTools from "./Pages/PremiumTools/PremiumTools"
import CheckOut from "./Pages/CheckOut/CheckOut"
import ToolsDetails from "./Pages/ToolsDetails/ToolsDetails"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premium-tools" element={<PremiumTools />} />
        <Route path="/premium-tools/tools-details" element={<ToolsDetails />} />
        <Route path="/premium-tools/check-out" element={<CheckOut />} />
      </Routes>
    </>
  )
}

export default App