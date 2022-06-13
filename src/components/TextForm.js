
import React,{useState} from 'react'

export default function TextForm(props) {
const[text,setText]=useState("");
 
  const HandleUpperClick=()=>{
   setText(text.toUpperCase());
  }

  const HandleLowerClick=()=>{
    setText(text.toLowerCase());
  }

  const HandleClearText=()=>{
    setText("");
  }

  const CopyToClipboard=()=>{
    navigator.clipboard.writeText(text)
  }

  const ReverseWords=()=>{
    let string=text.split(" ")
    var newString=""
    for(var i=parseInt(string.length)-1;i>=0;i--){
       newString+=" "+string[i];
    }
    setText(newString.trimStart());
  }

  const ReverseCharacters=()=>{

    let string=text;
    let newString="";
    for(let i=parseInt(string.length)-1;i>=0;i--){
      newString+=string[i];
    }
    setText(newString);
  }

  const RemoveExtraSpaces=()=>{
    setText(text.trim());
  }

  const HandleOnChange=(event)=>{

      setText(event.target.value);
     
  }

 return (
     <>
     <h1>{props.heading}</h1>
      <div className=" container mb-3">
        <textarea className="form-control" value={text} name="myBox" placeholder="Enter your text here..." onChange={HandleOnChange} id="myBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary" onClick={HandleUpperClick}>UPPER CASE</button>
      <button className="btn btn-primary ms-2" onClick={HandleLowerClick}>lower case</button>
      <button className="btn btn-primary ms-2" onClick={HandleClearText}>Clear</button>
      <button className="btn btn-primary ms-2" onClick={CopyToClipboard}>Copy to clipboard</button>
      <button className="btn btn-primary ms-2" onClick={ReverseWords}>Reverse words</button>
      <button className="btn btn-primary ms-2" onClick={ReverseCharacters}>Reverse Characters</button>
      <button className="btn btn-primary ms-2" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p> {(text.split(" ")).length} words and {text.length} characters</p>
        <p>{0.008*(text.split(" ")).length} minutes to read it.</p>
      </div>
      <h3>Preview</h3>
      <div className=" container mb-3">
        <textarea className="form-control" value={text} readOnly rows="10"></textarea>
      </div>
</>
  )
}   
