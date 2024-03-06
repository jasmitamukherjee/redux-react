import React from 'react'

export default function Navbar() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Central Bank of Jasmita</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
       
        
      </ul>
     <div>
        <button disabled={true} className=" btn btn-primary">
            Your balance : 0
        </button>
     </div>
    </div>
  </div>
</nav>
    </div>
  )
}