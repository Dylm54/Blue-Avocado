import './App.css'
import Login from './pages/Login';
import Register from './pages/Register';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Payment } from './pages/Payment';
import { Context } from './Context';

function App() {

  return (
    <>
      <Routes>
        {/* <Route path="/login" element={
          <>
            <Context>
              <Login />
            </Context>
          </>
        } /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route exact path="/" element={
          <>
            <Context>
              <Home />
            </Context>
          </>
        } />
        <Route path="/payment" element={
          <>
            <Context>
              <Payment />
            </Context>
          </>
        } />
      </Routes>
    </>
  )
}

export default App
