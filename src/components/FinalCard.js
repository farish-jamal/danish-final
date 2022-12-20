import React from 'react'

function FinalCard({uid, description, displayName, src, photoURL, timestamp, title}) {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
      }
  return (
    <div>
        <div className="card mx-1 my-4" style={{width: "100%", height: "90vh", overflowX:"hidden",overflowY: "scroll"}}>
        <div className='d-flex'>
            <img src={src} className="card-img-top" alt="..." style={{"height": "300px"}}/>
        </div>
        <div className="card-body">
          <h5 className="card-title text-justify" style={{fontWeight: 600}}>{truncate(title, 40)}{" "}</h5>
          <p className="card-text" style={{ textAlign: "justify"}}>
          {description}
          </p>
        </div>
        <div className='d-flex align-items-center justify-content-between mx-3 mb-2'>
            {/* <p style={{"fontSize": "16px", marginRight: "10px", "fontWeight": "bolder"}}>Published By - {timestamp}</p> */}
            <div className='d-flex align-item-center justify-content-between mx-2'>
                <p style={{"fontSize": "16px", marginRight: "10px", "fontWeight": "bolder"}}>Published By - {displayName}</p>
                <img src={photoURL} alt="..." style={{"height": "30px", "borderRadius": "50%"}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FinalCard