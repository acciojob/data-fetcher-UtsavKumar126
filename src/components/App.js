
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const[data,setData]=useState("");
  useEffect(()=>{
    fetchData();
  },[])
  
  async function fetchData(){

    const response= await fetch("https://dummyjson.com/products");
    const data= await response.json();

    setData(data);

  }
    return (
    <div>
        {/* Do not remove the main div */}
        {
          !data?<p>Loading...</p>:<pre>{JSON.stringify(data)}</pre>
        }
    </div>
  )
}

export default App
