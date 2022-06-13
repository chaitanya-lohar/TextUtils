
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";

function Demo() {
  const [mode,setMode]=useState('light') // will check dark mode is enabled or not 
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }


  const toggleMode=()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor='#343a40';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }


  }

  return (
    <>
<Navbar title="TextUtils Blog" homeText="Home" aboutText="About" contactText="Contact" mode={mode} toggleMode={toggleMode} />
<Alert alert="this is alert" />
<div className="container my-3">
  <TextForm heading="Enter the text to analyze below"  mode={mode} />
  {/* <About/> */}
  </div>
</>
  );
}

export default Demo;
