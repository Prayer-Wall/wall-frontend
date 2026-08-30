import { Navigate, replace, Route, Routes } from 'react-router'
import Layout from './layout/Layout';
import Home from './home/Home'
import Register from './auth/Register';
import Login from './auth/Login';
import Wall from './prayers/Wall';
import AddPrayer from './prayers/AddPrayer';
import Page404 from './404/404';
import { useAuth } from './auth/AuthContext';

function App() {
  const {token} = useAuth()

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wall" element={token ? <Wall /> : <Navigate to="/" replace />} />
        <Route path="/add" element={token ? <AddPrayer /> : <Navigate to="/" replace />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  )
}

export default App
