import { Route, Routes } from 'react-router'
import Layout from './layout/Layout';
import Home from './home/Home'
import Register from './auth/Register';
import Login from './auth/Login';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
