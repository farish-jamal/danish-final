import React from 'react'

function Profile({src, name}) {
  return (
    <div className='mx-4'>
        <img src={src} alt="" style={{"width": "150px", "borderRadius": "50%"}}/>
        <p className='text-center mt-2' style={{"fontWeight": "bold"}}>{name}</p>
    </div>
  )
}

export default Profile