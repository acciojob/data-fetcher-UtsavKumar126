
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const[data,setData]=useState("");
  useEffect(()=>{
    fetchData();
  },[])
  
  async function fetchData(){

    try{
    const response= await fetch("https://dummyjson.com/products");
    const data= await response.json();
    setData(data);
    }
    catch(error){
      setData(error);
      console.log(error);
    }
  }
    return (
    <div>
        {/* Do not remove the main div */}
        {
          !data?<h1>Loading...</h1>:<h1><pre>{JSON.stringify(data)}</pre></h1>
        }
    </div>
  )
}

export default App
