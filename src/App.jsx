import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layout/main-layout"
import { Home } from "./page/home/home"
import { About } from "./page/about/about"
import { Input } from "./page/about/components/input"
import { Buttons } from "./page/about/components/buttons"
import { Info } from "./page/about/components/info"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>}>
            <Route index element={<Input/>} />
            <Route path="buttons" element={<Buttons/>} />
            <Route path="info" element={<Info/>} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
