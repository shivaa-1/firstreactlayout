import React from 'react';

const Navbar=(prop)=>{
    return(
        <>
        <nav className="navbar bg-dark navbar-expand-lg p-2">
        <div className="container-fluid m-2 justify-content-around mx-5">
            <a className="navbar-brand text-light" href="/"><i className="bi bi-film"></i>  My Movies</a>
            <button className="navbar-toggler border-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="bi bi-three-dots-vertical fs-1 text-info"></i></span>
            </button>  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                
                <a className="nav-link text-light" href="/">About</a>
              </li>
            </ul>
          <form className="d-flex" role="search">
            <input type='search' className='form-control m-2' placeholder='search..' onChange={prop.inputhandler}/>
          </form>
          </div>
        </div>
        </nav>
        </>
    )
}

export default Navbar;