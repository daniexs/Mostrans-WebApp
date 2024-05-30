import { Link } from 'react-router-dom'
import './list.css'

function List(props) {
  return (
    <div className="row">
      <div className="col-md-8">
        <div className="people-nearby">
          <div className="nearby-user">
            <div className="row">
              <div className="col">
                <img
                  src={props.data.image}
                  alt="user"
                  className="profile-photo-lg"
                />
              </div>
              <div className="col-5">
                <h5>
                  <Link to={'detail/' + props.data.id} className="profile-link text-dark">
                    {props.data.name}
                  </Link>
                </h5>
                <p>{props.data.status}</p>
              </div>
              <Link to={'detail/' + props.data.id} className='col' style={{ margin: 'auto' }}>
                <button className='btn btn-primary pull-right rounded-pill'>Detail</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default List