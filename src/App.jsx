import { BrowserRouter, Route, Routes, } from "react-router"
import { Home } from "./Component/Home"
import { Navbar } from "./Component/Navbar"
import { About } from "./Component/About"
import "./input.css"
import { Project } from "./Component/Project"
import "./index.css"
import { Contact } from "./Component/Contact"
import { Skill } from "./Component/Skill"
import { Resume } from "./Component/Resume"
// import { Toster } from "./Component/Component/Toster"
// import { TextEffect } from "../components/motion-primitives/text-effect"





function App() {


  return (
    <>
     
      <BrowserRouter>
       <Navbar />
       {/* <Toster/> */}
        <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/skill" element={<Skill/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
