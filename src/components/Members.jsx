import React from 'react'
import Profile from './Profile'
import first from "../assests/1 (1).jpeg"
import Header from './Header'

function Members({user}) {
  return (
    <>
    <Header user={user}/>
    <div>
        <h1 className='mt-4 text-center'>About Us</h1>
        <div className="container d-flex justify-content-center align-items-center mt-3">
            <div className="left me-4">
                <img src={first} alt="" style={{"width": "500px"}}/>
            </div>
            <div className="right">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus commodi labore vitae nobis omnis, saepe, dolores pariatur corporis inventore maxime incidunt sed iusto beatae quod! Fugiat repudiandae atque praesentium enim voluptas, nostrum a. Quam sunt facilis nihil qui porro ipsa quae vitae quod ratione, dignissimos, non reprehenderit quia culpa atque ab iste natus, provident consectetur! Impedit aliquam nostrum consectetur, id placeat incidunt explicabo ut voluptatibus, voluptatum reiciendis aspernatur laudantium! Dignissimos incidunt voluptas suscipit non, doloribus inventore maxime neque. Fugiat nobis mollitia necessitatibus odio a velit, voluptatum nisi? Necessitatibus dolor eligendi cum exercitationem, inventore quidem corrupti harum, odio at, consectetur possimus Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, odio?</p>
            </div>
        </div>
        <h1 className='mt-4 text-center'>Our Members</h1>
        <div className="container d-flex justify-content-center align-items-center mt-3">
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
        </div>
    </div>
    </>
  )
}

export default Members