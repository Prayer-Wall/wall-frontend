import { Route, Routes } from 'react-router'
import Layout from './layout/Layout';
import Home from './home/Home'
import Register from './auth/Register';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
