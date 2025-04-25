import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import CreateAccountPage from './pages/CreateAccountPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import AccountSettingsPage from './pages/AccountSettingsPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account-settings" element={<AccountSettingsPage />} />
        </Routes>
        </div>
    </Router>
  )
}

export default App
