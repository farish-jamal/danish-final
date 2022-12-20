import React,{useState} from 'react'
import Crouseal from './Crouseal'
import Header from './Header'
import LoadingBar from 'react-top-loading-bar'

function Home({user}) {
  const [progress, setProgress] = useState(100);
  return (
    <div>
        <Header user={user} />
        <LoadingBar
        color='#f11946'
        progress={progress}
       height={3}
      />
        <Crouseal />
    </div>
  )
}

export default Home