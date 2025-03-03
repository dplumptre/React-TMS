import { NavLink } from "react-router-dom";



const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">TMS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink 
                  to="/" 
                  className="nav-link" 
                  style={({ isActive }) => ({ backgroundColor: isActive ? '#0d6efd' : '', color: isActive ? '#fff' : '' })}
                >
                  Tasks
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/upload-excel" 
                  className="nav-link" 
                  style={({ isActive }) => ({ backgroundColor: isActive ? '#0d6efd' : '', color: isActive ? '#fff' : '' })}
                >
                  Upload
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav
