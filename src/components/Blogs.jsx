import React, {useEffect, useState} from 'react'
import Header from './Header'
import {db} from "../firebase";
import FinalCard from './FinalCard';

function Blogs({user}) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    db.collection("blogs")
      .orderBy("timestamp", "desc").onSnapshot((snapshot) => {
        setBlogs(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  console.log(blogs);
  return (
    <div>
      <Header user={user}/>
      <div className="container d-flex align-items-center justify-content-center flex-wrap">
        {
          blogs.map(({uid, description, displayName, img, photoURL, timestamp, title})=>(
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

export default Blogs