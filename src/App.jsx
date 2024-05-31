import { useState } from 'react'
import React from 'react'
import First_page from './components/First_page.jsx'
import Second_page from './components/Second_page.jsx'

function App() {
  const [gamestarted, setgamestarted] = useState(false)
  const toggleGamePlay= ()=>{
    setgamestarted(prev => !prev);
  }
  return (
    <>
      <div>
        {gamestarted?<Second_page />:<First_page toggle={toggleGamePlay} />}
       {/* <First_page /> */}
       {/* <Second_page /> */}
      </div>
    </>
  )
}

export default App
