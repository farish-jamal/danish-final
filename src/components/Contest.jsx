import React,{useEffect, useState} from 'react'
import Header from './Header'
import {db} from "../firebase"
import FinalCard from './FinalCard';

function Contest({user}) {
  const [contest, setContest] = useState([]);
  useEffect(() => {
    db.collection("contest")
      .orderBy("timestamp", "desc").onSnapshot((snapshot) => {
        setContest(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  console.log(contest);
  return (
    <div>
      <Header user={user}/>
      <div className="container d-flex align-items-center justify-content-center flex-wrap">
        {
          contest.map(({uid, description, displayName, img, photoURL, timestamp, title})=>(
            <FinalCard
            key={uid}
            title={title}
            description={description}
            src={img}
            photoURL={photoURL}
            displayName={displayName}
            timestamp={timestamp}
            />
          ))
        }
      </div>
      </div>
  )
}

export default Contest