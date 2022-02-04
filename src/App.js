import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
