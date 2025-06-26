import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import PremiumTools from "./Pages/PremiumTools/PremiumTools"
import CheckOut from "./Pages/CheckOut/CheckOut"
import ToolsDetails from "./Pages/ToolsDetails/ToolsDetails"
import OrderConfirm from "./Pages/OrderConfirm/OrderConfirm"
import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premium-tools" element={<PremiumTools />} />
        <Route path="/premium-tools/tools-details" element={<ToolsDetails />} />
        <Route path="/premium-tools/check-out" element={<CheckOut />} />
        <Route path="/premium-tools/order-confirm" element={<OrderConfirm />} />
      </Routes>
    </>
  )
}

export default App