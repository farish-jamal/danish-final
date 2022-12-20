import React,{useState} from 'react'
import g1 from "../assests/gal-1 (1).jpeg"
import g2 from "../assests/gal-1 (2).jpeg"
import g3 from "../assests/gal-1 (3).jpeg"
import g4 from "../assests/gal-1 (4).jpeg"
import g5 from "../assests/gal-1 (6).jpeg"
import g6 from "../assests/gal-1 (7).jpeg"
import g7 from "../assests/gal-1 (8).jpeg"
import g8 from "../assests/gal-1 (9).jpeg"
import g9 from "../assests/gal-1 (10).jpeg"
import g10 from "../assests/gal-1 (11).jpeg"
import g11 from "../assests/gal-1 (12).jpeg"
import g12 from "../assests/gal-1 (5).jpeg"

import Header from './Header'
import LoadingBar from 'react-top-loading-bar'

function Gallery({user}) {
  const [progress, setProgress] = useState(100);
  return (
    <>
    <Header user={user}/>
    <LoadingBar
        color='#f11946'
        progress={progress}
       height={3}
      />
    <div className='container'>
        <h1 className='text-center mt-4'>Our Best Photos</h1>
        <div className="d-flex align-items-center justify-content-center flex-wrap">
          <img
            src={g1}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={g2}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={g3}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={g4}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={g5}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={g6}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={g7}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={g8}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={g9}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={g10}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={g11}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={g12}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
        </div>
    </div>
    </>
  )
}

export default Gallery