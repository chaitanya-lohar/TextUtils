
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

  const Trim=()=>{
    setText(text.trim());
  }
  const RemoveExtraSpace=()=>{
    var arr=text.split(" ");
    var r="";
    for(var i=0;i<arr.length;i++){
      if(arr[i].length>0){
     r+=arr[i]+" ";
      }
    }
    setText(r.trimEnd());
  }
  

  const HandleOnChange=(event)=>{

      setText(event.target.value);
     
  }

 return (
     <>
     <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
      <div className=" container mb-3">
        <textarea className="form-control" value={text} name="myBox" style={{backgroundColor:props.mode==='dark'?'#32363a':'white',color:props.mode==='dark'?'white':'black'}} placeholder="Enter your text here..." onChange={HandleOnChange} id="myBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary" onClick={HandleUpperClick}>UPPER CASE</button>
      <button className="btn btn-primary ms-2" onClick={HandleLowerClick}>lower case</button>
      <button className="btn btn-primary ms-2" onClick={CopyToClipboard}>Copy to clipboard</button>
      <button className="btn btn-primary ms-2" onClick={ReverseWords}>Reverse words</button>
      <button className="btn btn-primary ms-2" onClick={ReverseCharacters}>Reverse Characters</button>
      <button className="btn btn-primary ms-2" onClick={RemoveExtraSpace}>Remove Extra Space</button>
      <button className="btn btn-primary ms-2" onClick={Trim}>Trim</button>
      <button className="btn btn-primary ms-2" onClick={HandleClearText}>Clear</button>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p> {(text.split(" ")).length} words and {text.length} characters</p>
        <p>{0.008*(text.split(" ")).length} minutes to read it.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in above textbox for preview.."}</p>
      </div>
      
</>
  )
}   
