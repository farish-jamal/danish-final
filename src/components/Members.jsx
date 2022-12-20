import React,{useState} from 'react'
import Profile from './Profile'
import first from "../assests/1 (1).jpeg"
import Header from './Header'
import LoadingBar from 'react-top-loading-bar'
import p1 from "../assests/team-1 (1).jpg"
import p2 from "../assests/team-1 (2).jpg"
import p3 from "../assests/team-1 (3).jpg"
import p4 from "../assests/team-1 (4).jpg"
import p5 from "../assests/team-1 (5).jpg"

function Members({user}) {
    const [progress, setProgress] = useState(100);
  return (
    <>
    <Header user={user}/>
    <LoadingBar
        color='#f11946'
        progress={progress}
       height={3}
      />
    <div>
        <h1 className='mt-4 text-center'>About Us</h1>
        <div className="container d-flex justify-content-center align-items-center mt-3">
            <div className="left me-4">
                <img src={first} alt="" style={{"width": "500px"}}/>
            </div>
            <div className="right">
                <p>we are the students of jamia millia islamia. Diploma in Computer Engineering 3rd Year Self Finance.</p>
                <p className='text-center'><b>Our Aim</b></p>
                <p>We are here to help every persons by providing you the best tools that is available mobile photography website. On our website that will help you in photography. how to click good photos in mobile</p>
            </div>
        </div>
        <h1 className='mt-4 text-center'>Our Members</h1>
        <div className="container d-flex justify-content-center align-items-center mt-3">
            <Profile src={p1} name="Danish Iqbal"/>
            <Profile src={p2} name="Aaquib Akhtar"/>
            <Profile src={p3} name="Abdul Hannan"/>
            <Profile src={p4} name="Darakhshan Perween"/>
            <Profile src={p5} name="Amaan Neyaz"/>
        </div>
    </div>
    </>
  )
}

export default Members