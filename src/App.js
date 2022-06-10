
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function Demo() {
  return (
    <>
<Navbar title="TextUtils Blog" homeText="Home" aboutText="About" contactText="Contact"  />
<div className="container my-3">
  <TextForm heading="Enter the text to analyze below" />
  </div>
</>
  );
}

export default Demo;
