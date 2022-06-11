
import React,{useState} from 'react'

export default function TextForm(props) {
const[text,setText]=useState("Enter the text here...");
  
  const HandleUpperClick=()=>{
   setText(text.toUpperCase());
  }

  const HandleLowerClick=()=>{
    setText(text.toLowerCase());
  }

  const HandleOnChange=(event)=>{

      setText(event.target.value);
  }

 return (
     <>
     <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={HandleOnChange} id="myBox" rows="10"></textarea>
</div>
<button className="btn btn-primary" onClick={HandleUpperClick}>Convert to Uppercase</button>
<button className="btn btn-primary ms-2" onClick={HandleLowerClick}>Convert to Lowercase</button>
</>
  )
}   
