import Routes from './components/Routes'
import Navabar from './components/Navabar'
import { useRoutes } from 'react-router-dom'

function App() {

  const router = useRoutes(Routes)

  return (
    <>
    <Navabar />
    {router}
    </>
  )
}

export default App
