import { useQuery, gql } from '@apollo/client'
import { Link, useParams } from 'react-router-dom'
import imgLoading from '../assets/loading.gif'

const GET_CHARACTER_DETAIL = gql`
  query GetCharacter($id: ID!) {
  character(id: $id) {
    id
    name
    status
    species
    type
    gender
    origin {
      name
    }
    location {
      name
    }
    image
  }
}
`
function DetailCharacterPage() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_CHARACTER_DETAIL, {
    variables: {
      id: id,
    },
  })

  if (loading) {
    return (
      <>
        <div className="loadings">
          <img src={imgLoading} />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="main-body">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={data?.character.image}
                    alt="Admin"
                    className="rounded-circle p-1 bg-primary"
                    width={110}
                  />
                  <div className="mt-3">
                    <h4>{data?.character.name}</h4>
                  </div>
                </div>
                <hr className="my-4" />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      Status
                    </h6>
                    <span className="text-secondary">{data?.character.status}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      Gender
                    </h6>
                    <span className="text-secondary">{data?.character.gender}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      Species
                    </h6>
                    <span className="text-secondary">{data?.character.species}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      Type
                    </h6>
                    <span className="text-secondary">{data?.character.type}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      Origin
                    </h6>
                    <span className="text-secondary">{data?.character.origin?.name}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-4">
            <div className="card">
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-sm-3 mb-2 text-center">
                    <h6 className="mb-0">Location</h6>
                  </div>
                  <div className="col-sm-9 text-secondary text-center">
                    <p>{data?.character.location.name}</p>
                  </div>
                </div>
                <Link to={'/location/update/' + data?.character.id} className="d-flex justify-content-center">
                  <button className="btn btn-primary px-4">
                    Update Location
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailCharacterPage