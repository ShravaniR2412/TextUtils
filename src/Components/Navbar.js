import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (

        <>
            <div>
                <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode} shadow-lg`} >
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/land">{props.title}</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">{props.about}</Link>
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
