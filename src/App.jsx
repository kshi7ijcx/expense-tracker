import { Routes, Route } from "react-router-dom"
import { Login, ExpenseTracker } from './pages/exports.js'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/expense-tracker" element={<ExpenseTracker />} />
    </Routes>
  )
}
export default App