import React, {useEffect} from 'react'
import CtaTop from './components/ctaTop/CtaTop'

function App() {
  useEffect(() => {
    /* eslint-disable-next-line */
    document.title = 'ecommer-app'
  })
  return <CtaTop />
}

export default App
