import React from 'react'
import Crouseal from './Crouseal'
import Header from './Header'

function Home({user}) {
  return (
    <div>
        <Header user={user} />
        <Crouseal />
    </div>
  )
}

export default Home