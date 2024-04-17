import { RouterProvider } from "react-router-dom";
import { router } from "./routes/allroutes";
//import React, { useEffect, useState } from 'react';//pour le lien entre le front et le back
//import axios from 'axios';
function App() {
  /*const [data, setData] = useState('');

  useEffect(() => {
    fetch('/work')
      .then(res => {
        console.log(data);
        return res.json()
        
      })
      .then(data => {
         setData(data);
       })
  }, []);
  */

  return (
    /*<div>
      {data ? data.map(dataOne => <div>{dataOne.workelemtitle}</div>) : 'Loading...'}
    </div>*/
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
