import React from 'react';

export default function Navbar() {
    return <div>
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Cart</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
}