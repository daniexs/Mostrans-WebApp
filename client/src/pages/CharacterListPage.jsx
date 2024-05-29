import { useEffect, useState } from "react"
import { useQuery, gql } from '@apollo/client'
import List from "../components/List"
import { Link } from 'react-router-dom'

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
function CharacterListPage(params) {
  const { loading, data, error } = useQuery(GET_ALL_CHARACTER)

  const [dataCharacter, setDataCharacter] = useState([])

  useEffect(() => {

  }, [])

  return (
    <>
      <h1>Character List</h1>
      {data?.characters?.results && data.characters.results.map(el => {
        return (
          <>
            <List key={el.id} data={el} />
          </>
        )
      })}
    </>
  )
}

export default CharacterListPage