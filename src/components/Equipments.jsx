import React, {useEffect, useState} from 'react'
import Header from './Header'
import {db} from "../firebase";
import FinalCard from './FinalCard';

function Equipments({user}) {
  const [equipment, setEquipment] = useState([]);
  useEffect(() => {
    db.collection("equipments")
      .orderBy("timestamp", "desc").onSnapshot((snapshot) => {
        setEquipment(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  console.log(equipment);
  return (
    <div>
      <Header user={user}/>
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