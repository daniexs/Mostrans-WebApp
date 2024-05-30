import { gql, useQuery } from "@apollo/client"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import imgLoading from '../assets/loading.gif'

const GET_ALL_LOCATION_FILTER = gql`
query GetLocationsByName($name: String!) {
  locations(filter: { name: $name }) {
    results {
      id
      name
    }
  }
}
`

function UpdateLocationPage(params) {
  const { id } = useParams()
  const [inputValue, setInputValue] = useState({
    location: '',
    check: true
  })
  const { loading, data, error } = useQuery(GET_ALL_LOCATION_FILTER, {
    variables: {
      name: inputValue.location
    }
  })
  function changeHandler(e) {
    const { name, value } = e.target
    setInputValue({
      ...inputValue,
      [name]: value,
      check: true
    })
  }
  function listController(value) {
    setInputValue({ location: value, check: false })
  }

  return (
    <div>
      <h1 className="text-center">Update Location</h1>

      <div className="row mt-4">
        <div className="col-md-8 mx-auto bg-light rounded p-4">
          <h5 className="text-center text-secondary">
            Write any location
          </h5>
          <form className="p-3">
            <div className="input-group">
              <input
                type="text"
                id="search"
                className="form-control form-control-lg rounded-0 border-info"
                placeholder="Search..."
                autoComplete="off"
                name="location"
                value={inputValue.location}
                onChange={changeHandler}
                required=""
              />
              <Link to={'/detail/' + id} className="input-group-append">
                <button
                  className="btn btn-primary btn-lg rounded-0"
                >Save</button>
              </Link>
            </div>
          </form>
          <div
            className="col-md-5"
            style={{ position: "relative", marginTop: "-15px" }}
          >
            <div className="list-group" id="show-list">
              {inputValue.check && data?.locations?.results.map(el => {
                return (
                  <div key={el.id} onClick={() => listController(el.name)} className="list-group-item list-group-item-action border-1">{el.name}</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateLocationPage