import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TexthtmlForm(props) {
    const [text, setText] = useState('Enter text here');
    // text='Wrong way' -->wrong way to set the set the state 
    // setText='correct way' -->correct way to set or change the set

    const toUpperCase = () => {
        console.log('upper case button clicked ' + text);
        let UpperCaseText = text.toUpperCase()
        setText(UpperCaseText)


    }
    const toLowerCase = () => {
        console.log('lower case button clicked ' + text);
        let LowerCaseText = text.toLowerCase()
        setText(LowerCaseText)

    }

    const clearText = () => {
        console.log('clearText button clicked ' + text);
        let LowerCaseText = ''
        setText(LowerCaseText)

    }

    const handleOnChange = (event) => {
        // console.log('handleOnChange');
        setText(event.target.value)
    }

    return (
        <>
            <div>
                <h3 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.textHeading}</h3>
                <div  className='mb-3'>
                    <textarea  style={{ backgroundColor: `${props.mode==='light'?'white':'#413b3b8c'}`}} className={`form-control text-${props.mode==='light'?'dark':'light'}`} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>

                <button className="btn btn-primary mx-2" onClick={toUpperCase}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={toLowerCase}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
            </div>

            <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`} >
                <h2 >Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} letters</p>

            </div>

        </>
    )
}

TexthtmlForm.propTypes = {
    textHeading: PropTypes.string
}

TexthtmlForm.defaultProps = {
    textHeading: 'Set text heading here',
}