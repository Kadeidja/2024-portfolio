import React, { useEffect, useState } from 'react';//pour le lien entre le front et le back

function CarrerComponent(){
    const [data, setData] = useState('');

  useEffect(() => {
    fetch('/carrer')
      .then(res => {
        console.log(data);
        return res.json()
        
      })
      .then(data => {
         setData(data);
       })
  }, []);
return (
    <div>
    <h1>EN COURS DE CONSTRUCTION</h1>
    {data ? data.map(dataOne => <div>{dataOne.carrername}</div>) : 'Loading...'}
    
    </div>
)
}

export default CarrerComponent;