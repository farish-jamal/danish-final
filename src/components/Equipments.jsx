import React, {useEffect, useState} from 'react'
import Header from './Header'
import {db} from "../firebase";
import FinalCard from './FinalCard';
import LoadingBar from 'react-top-loading-bar'

function Equipments({user}) {
  const [equipment, setEquipment] = useState([]);
  const [progress, setProgress] = useState(100);
  useEffect(() => {
    db.collection("equipments")  
      .orderBy("timestamp", "desc").onSnapshot((snapshot) => {
        setEquipment(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      <Header user={user}/>
      <LoadingBar
        color='#f11946'
        progress={progress}
       height={3}
      />
      <div className="container d-flex align-items-center justify-content-center flex-wrap">
        {
          equipment.map(({uid, description, displayName, img, photoURL, timestamp, title})=>(
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

export default Equipments