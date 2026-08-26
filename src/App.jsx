import { Route, Routes } from 'react-router'
import Layout from './layout/Layout';
import Main from './home/Home'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  )
}

export default App
