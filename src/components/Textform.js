import React, { useState } from 'react'




export default function Textform(props) {
    const handleUpClick= ()=>{
        //console.log("Upeprcase was clicked" + text)
        let newText=text.toUpperCase();

        setText(newText)
    }
    const handleOnChange =(event)=>{
        //console.log("HandleChange clicked")
        setText(event.target.value) // type hona allow krdega 
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=()=>{
        setText("");
    }
    const handleExtraSpaces = () =>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    
    const [text, setText] = useState('Enter text here');
    
    return (
    <>

        <div className="container"><br />
            <h1>  {props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder='Enter text here' value= {text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>UPPERCASE Button</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}> lowercase Button</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        
        </div> 
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(' ').length} words, {text.length} characters</p>
            <p>Time to read : {0.08* text.split(' ').length} min. </p>
        <h3>Preview</h3>
        <p>{text}</p>
        </div>
            



    </>
    )
}
