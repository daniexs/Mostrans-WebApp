import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom'

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
                    <p className="text-secondary mb-1">{data?.character.status}</p>
                    <p className="text-muted font-size-sm">
                      {data?.character.gender}
                    </p>
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-instagram me-2 icon-inline text-danger"
                      >
                        <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                      Instagram
                    </h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-facebook me-2 icon-inline text-primary"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      Facebook
                    </h6>
                    <span className="text-secondary">bootdey</span>
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
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary px-4">
                    Update Location
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailCharacterPage