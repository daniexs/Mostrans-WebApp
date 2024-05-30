import { Link } from 'react-router-dom'
import './card.css'
function Card(props) {

  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex flex-column flex-lg-row">
            <div className="row flex-fill" >
              <span className="avatar avatar-text rounded-3 me-4" style={{ marginLeft: 10 }}>{props.data.i + 1}</span>
              <div className="col" style={{ margin: "auto" }}>
                <h4 className="h5">{props.data.el.name}</h4>
              </div>
              {props.data.page === "location" &&
                <Link to={props.data.el.id} className="col" style={{ margin: "auto" }}>
                  <button className="btn btn-primary rounded-pill">
                    View Character
                  </button>
                </Link>
              }

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Card