import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Textform(props) {
    
    const handleLwClick = () => {
        //console.log("lowercase was clicked:" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleRpClick = () => {
       
            let newText3 = text.replace(/damn|kill|shit/ig,"****" ).replace(/death/ig,"*****");
            setText(newText3)
        
    }
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value)
    }
    const handleClick = () => {
        console.log("clicked");
    }
    const handleOnChange2 = (event) => {
        console.log("on change");
        setText2(event.target.value)
    }
    const [textem, setText2] = useState("enter email");
    const [text, setText] = useState("enter text");

    return (
        <>
            <div>
                <h1>{props.email}</h1>
                <div className="container mb-3">
                    <input type="email" className="form-control" id="txtemail" value={textem} onChange={handleOnChange2} />
                </div>
                <div>
                    <button className="btn btn-success" onClick={handleClick}>Submit</button>
                </div>
                <h1>{props.heading}</h1>
                <div className=" container mb-3">
                    <textarea className="form-control" id="txtbox" value={text} onChange={handleOnChange} rows="5"></textarea>
                </div>
                <div>
                    <button className="btn btn-success mx-1" onClick={handleLwClick}>convert to lowercase</button>
                    <button className="btn btn-success mx-1" onClick={handleRpClick}>convert badwords to *</button>
                
                </div>
            </div>
            <div className="container my-2">
                <h1>Text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <span>{0.008 * text.split(" ").length} minutes to read </span>
                <p><b><u>Text Preview</u></b></p>
                <h5>{text}</h5>
            </div>
        </>
    );
}
Textform.propTypes = {
    email: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired
}
Textform.defaultProps = {
    email: 'input email'

}

