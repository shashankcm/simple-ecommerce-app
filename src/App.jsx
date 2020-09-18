import React, {useEffect} from 'react'
import CtaTop from './components/ctaTop/CtaTop'

import './styles/cta-top.css'

function App() {
  useEffect(() => {
    /* eslint-disable-next-line */
    document.title = 'ecommer-app'
  })
  return <CtaTop />
}

export default App
