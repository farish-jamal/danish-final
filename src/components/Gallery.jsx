import React from 'react'
import first from "../assests/1 (1).jpeg"
import Header from './Header'

function Gallery({user}) {
  return (
    <>
    <Header user={user}/>
    <div className='container'>
        <h1 className='text-center mt-4'>Our Best Photos</h1>
        <div className="d-flex align-items-center justify-content-center flex-wrap">
          <img
            src={first}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={first}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={first}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={first}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={first}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={first}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={first}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={first}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={first}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={first}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={first}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={first}
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