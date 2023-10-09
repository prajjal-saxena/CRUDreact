// import { useState } from 'react';
import './App.css';
// import {BiMessageAltAdd} from 'react-icons/bi';
// import {FaEdit} from 'react-icons/fa';
// import {BiMessageSquareAdd} from 'react-icons/bi';
// import {MdDelete} from 'react-icons/md';
import Practi from './Practi';

function App() {
  // const [item, setItem]  = useState('');
  // const [text, setText] = useState([]);
  // const [toggle, setToggle] = useState(true);


  // const addItem = () =>{
  //   console.log("This is me");
  //   item && setText([...text, item])
  //   setItem('')
  // }

  // const removeItem  = (ind) =>{
  //    console.log(ind)
  //    setText(text.filter((elem,i)=>(
  //       i !== ind
  //    )))
  // }

  // const changeIcon = (ind) =>{
  //    console.log("Change icon", ind.i); 
  //    setItem(ind.elem)
  //    setToggle(!toggle);
  // }

  // const updateItem = (item) => {
  //   console.log(item)
  // }
  return (
    <div className="App">
       {/* <div>
         <input type="text"
          class="form-control" value={item} onChange={(e)=>setItem(e.target.value)} name="" id="" aria-describedby="helpId" placeholder=""/>
         <button className='btn btn-primary' onClick={addItem}>{toggle? <BiMessageAltAdd/> : <FaEdit onClick={()=>{updateItem(item)}}/>}</button>
       </div>

       <div className='container' style={{width: "72%"}}>
         {
           text.map((elem, i)=>(
            <>
             <div style={{display: "flex", margin: "10px 0px"}}>
               <div style={{width: "80%"}}><p style={{margin: "0px"}} key={i}>{elem}</p></div>
               <div style={{width: "10%"}}><BiMessageSquareAdd onClick={()=> changeIcon({elem, i})}/></div>
               <div style={{width : "10%"}}><MdDelete onClick={()=>removeItem(i)}/></div>
             </div>
             
            </>
           ))
         }
       </div> */}
       <Practi/>
    </div>
  );
}

export default App;
