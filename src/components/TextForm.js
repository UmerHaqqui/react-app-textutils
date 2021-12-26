import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase ","success")
    }

    const handleLoClick = ()=>{
        // console.log('uppercase was clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase ","success")
    }

    const handleClear = ()=>{
        // console.log('uppercase was clicked');
        let newText = "";
        setText(newText);
        props.showAlert("text removed ","success")
    }

    const handleOnChange = (event)=>{
        // console.log('OnChange was clicked');
        setText(event.target.value);
        
    }

    const[text,setText] = useState('')

    return (
        <>
        <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-2">
                <textarea className="form-control my-2" placeholder='' value={text}
                style={{backgroundColor : props.mode==='dark'?'rgb(5 2 64)':'white' , 
                        color : props.mode==='dark'?'white':'black'}} 
                onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary my-1 w-100" onClick={handleUpClick}>Convert to uppercase</button><br/>
            <button disabled={text.length===0} className="btn btn-primary my-1 w-100" onClick={handleLoClick}>Convert to Lowercase</button><br/>
            <button disabled={text.length===0} className="btn btn-primary my-1 w-100" onClick={handleClear}>Clear Text</button>

        </div>
        <div className="container my-4" style={{color : props.mode==='dark'?'white':'rgb(5 2 64)'}}>
            <h2>Your text summary</h2>
            <p>{text.split (" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split (" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Enter something to preview it here'}</p>
        </div>
        </>
        )
}
