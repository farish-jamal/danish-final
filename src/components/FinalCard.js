import React from 'react'

function FinalCard({uid, description, displayName, src, photoURL, timestamp, title}) {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
      }
  return (
    <div>
        <div className="card mx-1 my-4" style={{width: "18rem"}}>
        <img src={src} className="card-img-top" alt="..." style={{"height": "150px"}}/>
        <div className="card-body">
          <h5 className="card-title text-justify" style={{fontWeight: 600}}>{truncate(title, 40)}{" "}</h5>
          <p className="card-text" style={{ textAlign: "justify"}}>
          {truncate(description, 180)}{" "}
          </p>
        </div>
        <div className='d-flex align-items-center justify-content-between mx-3 mb-2'>
            <button className='btn btn-primary'>Read Blog</button>
            <div className='d-flex align-items-center justify-content-between' style={{"flexDirection": "column"}}>
                <img src={photoURL} className="card" alt="..." style={{"height": "30px", "borderRadius": "50%"}}/>
                <p style={{"fontSize": "13px"}}>{displayName}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FinalCard