import React from 'react'

export default function Landingpg(props) {
    return (
        <>
            <div className="card container my-5 padding" style={{ width: '30rem',backgroundColor:props.mode === 'light' ? 'rgb(166 170 180 / 71%)' : 'rgb(61 68 84 / 52%)'  } }>
            <div className="card-body my-3" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#ced4da' }}>
                    <h3 className="card-title">TextUtils</h3>
                    <p className="card-text">
                        A TextUtils application is a simple tool designed to manipulate text input with three primary functionalities: converting text to uppercase, converting text to lowercase, and clearing the entered text. Users can input text into the application, and then utilize the provided options to transform the text according to their needs:</p>
                </div>

                <div  my-3style={{ backgroundColor: props.mode === 'light' ? 'white' : '#ced4da' }} >
                <ul className="list-group list-group-flush m-3" >
                    <li className="list-group-item">Convert to UpperCase</li>
                    <li className="list-group-item">Convert to LowerCase</li>
                    <li className="list-group-item">Clear</li>
                </ul>
                </div>
            </div></>
    )
}

