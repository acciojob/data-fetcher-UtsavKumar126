
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const[data,setData]=useState("");
  useEffect(()=>{
    fetchData();
  },[])
  
  async function fetchData(){

    try{
      const response= await fetch("https://dummyjson.com/prodt");
      const data= await response.json();
      setData(data);
    }
    catch(error){
      setData(error);
    }
  }
    return (
    <div>
        {/* Do not remove the main div */}
        {
          !data&&<h1>Loading...</h1>
        }
        {
          data&&(
            <div>
              <h1>Data Fetched from API</h1>
              <pre>{JSON.stringify(data)}</pre>
            </div>
          )
        }
    </div>
  )
}

export default App
