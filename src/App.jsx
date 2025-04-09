import "./App.css";
import React from "react";
import Navbar from "./Nutri/navbar";
//import Login from "./PetBites/Components/Ani";
import Home from "./Nutri/Home";
import About from "./Nutri/About";
import Login from "./Nutri/Login";
import Register from "./Nutri/Register";
import Products from "./Nutri/Products";


import {
  createBrowserRouter ,
  RouterProvider
  
   } from "react-router-dom";
let router =createBrowserRouter(
  [
    {
      path:"/",
    element:<Navbar/>,
    },
    {
      path:"/login",
    element:<Login/>,
    },
    {
      path:"/register",
    element:<Register/>,
    },
    {
      path:"/home",
    element:<Home/>,
    },
    {
      path:"/about",
    element:<About/>,
    },
    {
      path:"/products",
    element:<Products/>,
    }, 


    
  ]

);






function App() {
  
  return (


    <>
    

    
    {/*<Header/> */}
    <RouterProvider router={router}/>
    
  
   </>   
  );
}

export default App
