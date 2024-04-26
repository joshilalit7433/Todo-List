import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function Main() {

    const[todo,settodo]=useState("");
    const[todos,settodos]=useState([])
    let[count,setcount]=useState(0);


    const change=(e)=>{
        settodo(e.target.value)
        
    }
    

    const add=()=>{
        
        
        if(!todo){
            alert("add some text");
        }
        else{
                settodos([...todos,{id:uuidv4(),todo}]);
                settodo("");
                plus();         
        }
        
    }
   

    const deletetodo=(e,id)=>{
        
       let newtodos=todos.filter(item=>{
        return item.id!==id;
       });
       settodos(newtodos);
       minus();

    }

    const edittodo=(e,id)=>{
        let t=todos.filter(item=>item.id===id);
        settodo(t[0].todo)

       let newtodos=todos.filter(item=>{
            return item.id!==id;
           });
           settodos(newtodos); 
 
    }

    const plus=()=>{
        setcount(count+1);
    }

    const minus=()=>{
        setcount(count-1);
    }

  return (
   <>
   <div className="  flex flex-col justify-center items-center mt-[50px]  lg:flex lg:flex-col lg:justify-center lg:items-center">
    <div>
        <p className="text-[25px] lg:text-[50px] text-white">Create Your Todo List</p>
    </div>
    <div>
        <textarea type="text"  value={todo} onChange={change} placeholder='Enter Your Text' className=" text-[25px] h-[80px] w-[300px] border-2 border-black  lg:h-[150px] lg:w-[800px] lg:border-2 lg:text-[30px]  lg:border-black"></textarea>
    </div>

    <div className=" pr-[200px] lg:pr-[700px] lg:pt-[10px]">
        <button onClick={add} className=" h-[35px] w-[65px] text-[20px]   bg-white text-black border-2 border-black lg:h-[30px] lg:w-[60px] rounded-md font-semibold ">SAVE</button>
    </div>

    <div className="lg:flex lg:justify-center lg:items-center">
        <p className=" text-white text-[25px] lg:text-[30px] font-semibold">Your List have {count} items </p>
        </div>

    

    {todos.map(item=>{

    return <div key={item.id} className=" bg-white pr-[150px] pt-[10px] lg:pr-[610px] lg:pt-[10px] flex flex-row justify-center items-center border-2 border-black my-[5px] w-[300px] lg:flex lg:flex-row lg:justify-center lg:items-center lg:border-2 lg:border-black lg:my-[5px] lg:w-[1000px] ">
    <p className=" text-wrap text-[20px] lg:text-[25px] font-medium lg:text-wrap">{item.todo}</p>
    
    <button onClick={(e)=>{deletetodo(e,item.id)}} className=" absolute left-[300px]   lg:absolute lg:left-[1200px]     "><img src='./images/delete.png' className=" h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"></img></button>
    <button onClick={(e)=>{edittodo(e,item.id)}} className=" absolute left-[250px]   lg:absolute lg:left-[1120px] "><img src='./images/edit.png' className=" h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"></img></button>
   
     </div> 


})}


   </div>
   </>
  )
}
