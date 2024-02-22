import { Routes, Route } from "react-router-dom"
import { Login, ExpenseTracker } from './pages/exports.js'
import PrivateRoutes from "./utils/PrivateRoutes.jsx"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/expense-tracker" element={<PrivateRoutes>
        <ExpenseTracker />
      </PrivateRoutes>} />
    </Routes>
  )
}
export default App