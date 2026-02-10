import React from "react";
import CounterApp from "./components/CounterApp";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import College from "./pages/college";
import Navbar from "./components/Navbar";
import Department from "./pages/Department";
import Info from "./pages/Info";
import Detail from "./pages/Detail";
import Login from "./components/Login";


function App(){
  return(
    <div>
      {/* <h1>I am app</h1> */}
      {/* <CounterApp/> */}

      <Navbar/>
      <Login/>
      <Routes>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/college" element = {<College/>}>
         <Route path="department" element = {<Department/>}/>
          <Route path="info" element = {<Info/>}/>
           <Route path="\detail" element = {<Detail/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;