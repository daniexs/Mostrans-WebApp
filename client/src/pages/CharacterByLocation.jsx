import { gql, useQuery } from "@apollo/client"
import { useLocation, useParams } from "react-router-dom"
import imgLoading from '../assets/loading.gif'
import Card from "../components/Card"

const GET_LOCATION_Member = gql`
query GetLocation($id: ID!) {
  location(id: $id) {
    id
    name
    type
    dimension
    residents {
      id
      name
    }
  }
}
`
function ListCharacterByLocation() {
  const { id } = useParams()
  const { loading, data, error } = useQuery(GET_LOCATION_Member, {
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
      <div className="text-center">
        <h1>List Character</h1>
        <h2>{data?.location.name}</h2>
      </div>
      {data?.location.residents.map((el, i) => {
        return (
          <Card key={el.id} data={{ el, i, page: 'listCha' }} />
        )
      })}
    </>
  )
}

export default ListCharacterByLocation