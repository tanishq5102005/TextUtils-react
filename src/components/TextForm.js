import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUp= ()=>{

    console.log("BTN 1 clicked");
    let txt=text.toUpperCase();
    setText(txt);
  }

  const handlelower =()=>{

    let txt=text.toLowerCase();
    setText(txt);

  }

   const cleartxt =()=>{

    let txt=' ';
    setText(txt);

  }
  const onc= (event)=>{

   // console.log(" ON changed");
     setText(event.target.value);
  }

  const capitalize=()=>{
    let txt=text.split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
    setText(txt);
  }

  const revstr=()=>{

    let txt=text.split("").reverse().join("");
    setText(txt);

  }
   

  const Handlecopy=()=>{

    navigator.clipboard.writeText(text)
    .then(()=>{
      console.log("Text copied");
      
      alert("Text copied!", "success");

    })

    .catch(err=>{
      console.error("Failed to copy",err);
      alert("Failed to copy");

    })

  }
  const [text,setText]=useState('Enter text here');
 
  return (
    <>
    <div className='container my-3' style={{color:props.mode === 'light'?'black':'white'}}>
      
<div className="mb-3">
    <h1>{props.heading}</h1>
  
  <textarea className="form-control" value={text}  onChange={onc} id="myBox" rows="8"  style={{backgroundColor : props.mode === 'light'?'white':'#1a3256',color:props.mode === 'light'?'black':'white'}}/>
</div>



<div className="d-flex flex-wrap gap-2">
  <button className="btn btn-dark" onClick={cleartxt}>Clear text</button>
  <button className="btn btn-primary" onClick={handleUp}>Convert to Uppercase</button>
  <button className="btn btn-primary" onClick={handlelower}>Convert to Lowercase</button>
  <button className="btn btn-primary" onClick={capitalize}>Capitalize Words</button>
  <button className="btn btn-primary" onClick={Handlecopy}>Copy to Clipboard</button>
  <button className="btn btn-primary" onClick={revstr}>Convert to Reverse</button>
</div>




    </div>

    <div className="container my-2"  style={{color:props.mode === 'light'?'black':'white'}}>
    <h2>Your text summary:-</h2>
    <p>{text.split(" ").length-1} words, {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes read</p>

    <p>{text.split(/[.!?]/).length-1} Sentences</p>
    <h3>Preview:-</h3>
    <p>{text}</p>
    
    </div>
    </>
  )
}
