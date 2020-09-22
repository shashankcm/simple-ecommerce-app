import React, {useEffect} from 'react'
import Landing from './pages/Landing'

function App() {
  useEffect(() => {
    /* eslint-disable-next-line */
    document.title = 'ecommer-app'
  })
  return <Landing />
}

export default App
