import React from "react";

function Cards({title, description, src}) {
  return (
    <div>
      <div className="card mx-1" style={{"width": "18rem"}}>
        <img src={src} className="card-img-top" alt="..." style={{"height": "150px"}}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
