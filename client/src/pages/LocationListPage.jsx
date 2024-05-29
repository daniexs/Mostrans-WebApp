import { gql, useQuery } from "@apollo/client"
import Card from "../components/Card.jsx";

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
  return (
    <>
      <div className="text-center mb-5">
        <h3>List Location</h3>
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