import React from "react";
// import Basic from "./Basic.jsx";
import Card from "./Card.jsx";
import CounterApp from "./CounterApp.jsx";

function App(){
  return (
    <div>
      <h1>Hii i am learning React</h1>
    
      {/* <Card image = "https://images.unsplash.com/photo-1770347314659-7fd45b638f87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" 
      name = "beach"
      price = "6000"
      description = "it is a forest for enjoyment"
      />

      <h1>PROJECT PANI PURI</h1>

      <Card image = "https://plus.unsplash.com/premium_photo-1767883340055-c31ef370df51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTd8fHxlbnwwfHx8fHw%3D"  
      name = "pani puri "
      price = "200"
      description = " jo khaye pani puri usse ______ ambreshpuri "
      /> */}

      <CounterApp/>
      <Decounter/>
      
    </div>
  )
}

export default App;