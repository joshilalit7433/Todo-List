import React, { useState } from 'react'

export default function Feedback() {
    const[mystyle,setmystyle]=useState({
        backgroundColor:'white'
    });

    const toggle=()=>{
        if(mystyle. backgroundColor==='white'){
            setmystyle({
                backgroundColor:'orange'
            })
        }
        else{
            setmystyle({
                backgroundColor:'white'
            })
        }
        console.log("hi")
       
    }
  return (
    <div className="flex flex-col justify-center items-center ">
        <div className="bg-white h-[200px] w-[500px] ">
            <p className="my-[10px] mx-[50px] text-[15px] font-semibold"> we would like your feedback to improve our website</p>
            <p className="my-[10px] mx-[120px] text-[15px] font-semibold"> what is your opinion on this page</p>
    <div className="mx-[110px] my-[30px]" >
        <button onClick={toggle} style={mystyle}><img src='./images/star.png' className="h-[50px] w-[50px] " ></img></button>
        <button onClick={toggle} style={mystyle}><img src='./images/star.png' className="h-[50px] w-[50px]"   ></img></button>
        <button onClick={toggle} style={mystyle}><img src='./images/star.png' className="h-[50px] w-[50px]"  ></img></button>
        <button onClick={toggle} style={mystyle}><img src='./images/star.png' className="h-[50px] w-[50px]"  ></img></button>
        <button onClick={toggle} style={mystyle}><img src='./images/star.png' className="h-[50px] w-[50px]"  ></img></button>
     </div>
        </div>  
    </div>
  )
}
