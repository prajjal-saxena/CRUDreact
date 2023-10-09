import React, { useState } from 'react'
import {BiEdit, BiMessageAltAdd} from 'react-icons/bi';
import {FaEdit} from 'react-icons/fa';
import {BiMessageSquareAdd} from 'react-icons/bi';
import {MdDelete} from 'react-icons/md';

const Practi = () => {
 const [item, setItem]  = useState('');
  const [text, setText] = useState([]);
const[id,setId]=useState(0)
  const[toggle, setToggle] = useState(true)

 const addItem = () =>{
    let x = {
        id  : Date.now(),
        data : item 
    }
    setText([...text, x])
    setItem('')
  }

  const removeItem  = (ind) =>{
     console.log(ind)
     setText(text.filter((elem,i)=>(
        i !== ind
     )))
  }

  const handleEdit = (elem) =>{
     console.log(elem.id)
     console.log(elem.data);
     setItem(elem.data)
     setToggle(!toggle)
    setId(elem.id)
    

    // let update = text.map((el)=>el.id === elem.id ? {...text,data : item} : text)
    // console.log("update", update);
    // setText(update);
  }
 
  const handleTextupdate = () =>{
    setText(text.map((el)=>{ el.data=el.id === id ? item:el.data;
    return el}))
    setToggle(true)
    setItem('');
  }
  
  return (
    <div>
      <div>
         <input type="text"
          class="form-control" value={item} onChange={(e)=> setItem(e.target.value)} name="" id="" aria-describedby="helpId" placeholder=""/>
         <button className='btn btn-primary'  style={{color:"#fff",background:"#000"}} >{toggle ? <BiMessageAltAdd style={{fontSize: "18px"}} onClick={addItem}/> : <BiEdit style={{fontSize: "18px", color: "#15d922"}} onClick={handleTextupdate}/>}</button>
       </div>

       <div className='container' style={{width: "72%", marginTop: "60px"}}>
         {
           text.map((elem, i)=>(
            <>
             <div style={{display: "flex", margin: "10px 0px"}}>
               <div style={{width: "80%"}}>{elem.data}</div>
               <div style={{width: "10%"}}><BiMessageSquareAdd style={{color: "green"}} onClick={()=> handleEdit(elem)}/></div>
               <div style={{width : "10%"}}><MdDelete style={{color: "red"}} onClick={()=> removeItem(i)} /></div>
             </div>
             
            </>
           ))
         }
       </div>
    </div>
  )
}

export default Practi