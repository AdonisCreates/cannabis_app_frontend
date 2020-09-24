import React , { useState, useEffect } from 'react';

export default function Weeds (props) {

    const [weeds, setWeeds] = useState([])
    const getWeeds = async () => {
       try {
         const response = await fetch('http://localhost:3000/weeds')
         const data = await response.json()
         setWeeds(data)
        } catch(error){
          console.error(error)
        }
      } 
    useEffect(()=>{
      (async function (){
        await getWeeds()
          })()
        },[])
        return (
            <div>
                {weeds.map( weed => {
                    return  (
                        <div key={weed.id} className="weed">
                            <h3>{ weed.strain }</h3>
                            <p>{ weed.type }</p>
                            <small>{weed.brand }</small>
                        </div>
                    )
                })}
            </div>
        )
}