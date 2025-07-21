import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import PremiumTools from "./Pages/PremiumTools/PremiumTools"
import CheckOut from "./Pages/CheckOut/CheckOut"
import ToolsDetails from "./Pages/ToolsDetails/ToolsDetails"
import OrderConfirm from "./Pages/OrderConfirm/OrderConfirm"
import FreeToolsDetails from "./Pages/ToolsDetails/FreeToolsDetails"
import Login from "./Pages/Auth/Login"
import Register from "./Pages/Auth/Register"
import './App.css'
import FreeCheckOut from "./Pages/CheckOut/FreeCheckOut"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premium-tools" element={<PremiumTools />} />
        <Route path="/premium-tools/tools-details/:id" element={<ToolsDetails />} />
        <Route path="/free-tools/tools-details/:id" element={<FreeToolsDetails />} />
        <Route path="/premium-tools/check-out/:id" element={<CheckOut />} />
        <Route path="/free-tools/check-out/:id" element={<FreeCheckOut />} />
        <Route path="/premium-tools/order-confirm/:id" element={<OrderConfirm />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App