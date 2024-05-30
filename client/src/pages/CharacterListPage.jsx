import { useQuery, gql } from '@apollo/client'
import List from "../components/List"
import imgLoading from '../assets/loading.gif'

const GET_ALL_CHARACTER = gql`
  query GetAllCharacters{
    characters {
      results {
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
  }
`
function CharacterListPage() {
  const { loading, data, error } = useQuery(GET_ALL_CHARACTER)

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
      <h1 className="text-center mb-3">Character List</h1>
      <div>
        {data?.characters?.results && data.characters.results.map(el => {
          return (
            <>
              <List key={el.id} data={el} />
            </>
          )
        })}
      </div>
    </>
  )
}

export default CharacterListPage