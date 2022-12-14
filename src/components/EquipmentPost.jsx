import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from 'firebase/compat/app';
import Header from './Header';
import LoadingBar from 'react-top-loading-bar'

const EquipmentPost = ({user}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");
    const [alink, setAlink] = useState("");
    const [progress, setProgress] = useState(0);
    const [flink, setFlink] = useState("");
    async function handleSubmit(e) {
        e.preventDefault();
        const { uid, photoURL, displayName } = auth.currentUser;
        setProgress(30)
        await db.collection("equipments").add({
          title: title,
          description: description,
          img: img,
          flink: flink,
          alink: alink,
          photoURL,
          uid,
          displayName,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setTitle("");
        setProgress(70)
        setDescription("");
        setImg("");
        setFlink("");
        setAlink("")
        setProgress(100)
      }
    return (
        <>
        <Header user={user}/>
        <LoadingBar
        color='#f11946'
        progress={progress}
       height={3}
      />
        <div className="container" style={{"height": "70vh"}}>
            <h1 className="text-center my-4">Post blog About Equipments</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" class="form-control my-3" placeholder="Enter The Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea type="text" class="form-control my-3" placeholder="Enter The Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <input type="text" class="form-control my-3" placeholder="Enter The Img Url" value={img} onChange={(e) => setImg(e.target.value)}/>
                <input type="text" class="form-control my-3" placeholder="Enter The Flipkart Link" value={flink} onChange={(e) => setFlink(e.target.value)}/>
                <input type="text" class="form-control my-3" placeholder="Enter The Amazon Link" value={alink} onChange={(e) => setAlink(e.target.value)}/>
                <button type="submit" className="btn btn-success">Post About Equipment</button>
            </form>
        </div>
        </>
    );
}

export default EquipmentPost;
