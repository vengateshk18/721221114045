import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Frout from './components/front'
import CompanyForm from './components/create'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Frout/>}></Route>
        <Route path="/create" element={<CompanyForm/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
