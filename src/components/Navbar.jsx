import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">{this.props.title}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">{this.props.about}</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            {/* <div className={`form-check form-switch ${this.props.darkMode ? 'text-light' : 'text-dark'}`}>
                                <input className="form-check-input mx-2" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode} />
                                <label className="form-check-label mx-2" htmlFor="flexSwitchCheckChecked">{`${this.props.darkMode ? 'Disable' : 'Enable'} Dark Mode`}</label>
                            </div> */}
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: "Stranger",
    about: "Soilder"
}