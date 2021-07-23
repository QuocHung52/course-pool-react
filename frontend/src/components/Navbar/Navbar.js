import React, { Component } from 'react';


export default class NavContainer extends Component {
    render() {
        return (
            <nav id="navbar">
                <div className="navbar navbar-expand-md navbar-dark bg-dark">
                    <a className="navbar-brand flex-shrink-0 order-md-1 ms-2 me-1 d-flex justify-content-center align-items-center"
                        href="/">
                        <img className="logo"
                            src="../../static/images/logo.png" alt="" />
                    </a>

                    <button className="navbar-toggler ms-auto order-md-3" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Account */}
                    <div className="order-md-4 mx-2 dropdown fs-5">
                        <a href="" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><i
                            className="fas fa-user-circle fa-2x text-white-50"></i></a>
                        <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="{% url 'courses:login' %}">Login</a></li>

                        </ul>
                    </div>
                    {/* Main Menu */}
                    <div className="collapse navbar-collapse order-md-2 ms-2" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className=" nav-item px-sm-2">
                                <a className=" nav-link navbar-text" id="home" href="/">Home</a>
                            </li>
                            <li className="nav-item px-sm-2">
                                <a className="nav-link navbar-text " id='favorite' href="/favorite">Favorite</a>
                            </li>

                            <li className="nav-item px-sm-2">
                                <a className="nav-link navbar-text " id="suggest" href="/suggest-course">Suggest
                                    a
                                    Course</a>
                            </li>
                            <li className="nav-item px-sm-2">
                                <a className="nav-link navbar-text " id="about" href="/about">About</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>


        )
    }

}