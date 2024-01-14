import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (

        <>
            <div>
                <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="ab">{props.title}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="ab">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="ab">{props.about}</a>
                                </li>
                            </ul>
                           

                            <div className={`form-check form-switch  text-${props.mode==='light'?'dark':'light'}`}>
                                <input  onClick={props.togglemode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                    <label  className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btn_text}</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </>

    )
}


//its like data type check if i pass number to my title variable then error will be shown in console
Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here',
    about: 'Set about text here', //incase if u forget to pass any particular props then this defau;t string will be shown
}
