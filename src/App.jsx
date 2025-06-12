import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuOrder from "./Components/MenuOrder/MenuOrder.jsx"
import Profile from "./Components/Profile/Profile.jsx"
import Navbar from "./Components/Nabvar/Nabvar.jsx"
import Section from "./Components/Body/Section.jsx"
import Login from "./Components/LoginPage/Login.jsx"

function App() {

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='' element={
              <>
                <Navbar/>
                <Section/>
              </>
            }/>
          <Route path='/menu' element={<MenuOrder/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
