import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import CharacterListPage from './pages/CharacterListPage.jsx'
import DetailCharacterPage from './pages/DetailCharacterPage.jsx'
import UpdateLocationPage from './pages/UpdateLocationPage.jsx'
import LocationListPage from './pages/LocationListPage.jsx'
import ListCharacterByLocation from './pages/CharacterByLocation.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <CharacterListPage />
      },
      {
        path: '/detail/:id',
        element: <DetailCharacterPage />
      },
      {
        path: '/location',
        element: <LocationListPage />,
      },
      {
        path: 'location/:id',
        element: <ListCharacterByLocation />
      },
      {
        path: 'location/update/:id',
        element: <UpdateLocationPage />
      }
    ]
  }
])

export default router