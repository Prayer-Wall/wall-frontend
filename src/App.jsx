import { Route, Routes } from 'react-router'
import Layout from './layout/Layout';
import Home from './home/Home'
import Register from './auth/Register';
import Login from './auth/Login';
import Wall from './prayers/Wall';
import AddPrayer from './prayers/AddPrayer';
import Page404 from './404/404';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wall" element={<Wall />} />
        <Route path="/add" element={<AddPrayer />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  )
}

export default App
