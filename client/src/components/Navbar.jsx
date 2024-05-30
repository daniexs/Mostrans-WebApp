import { Link } from "react-router-dom"

function Navbar(params) {
  return (
    <nav
      className="navbar navbar-expand-md 
          bg-success navbar-dark"
    >
      <div className="container">
        <h1>
          <Link to={''} className="navbar-brand">
            Mostrans
          </Link>
        </h1>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#mynav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mynav">
          <ul className="navbar-nav ml-auto text-center ">
            <li className="nav-item">
              <Link className="nav-link active" to={''}>
                {" "}
                Character List{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={'location'}>
                {" "}
                Location List{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar