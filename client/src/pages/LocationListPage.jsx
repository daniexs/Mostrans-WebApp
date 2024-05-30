import { gql, useQuery } from "@apollo/client"
import Card from "../components/Card.jsx";
import imgLoading from '../assets/loading.gif'

const GET_ALL_Location = gql`
query {
  locations {
    results {
      id
      name
      type
      dimension
    }
  }
}
`

function LocationListPage(params) {
  const { loading, data, error } = useQuery(GET_ALL_Location)
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
      <div className="text-center mb-4">
        <h1>List Location</h1>
      </div>
      {data?.locations.results.map((el, i) => {
        return (
          <Card key={el.id} data={{ el, i, page: 'location' }} />
        )
      })}
    </>
  )

}
export default LocationListPage