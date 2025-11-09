import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Cifrar } from "./pages/Cifrar"
import { Decifrar } from "./pages/Decifrar"
import { Sobre } from "./pages/sobre"
import { Home } from "./pages/HomePage"


function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cifrar" element={<Cifrar />} />
        <Route path="/decifrar" element={<Decifrar />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Layout>
  )
}

export default App
