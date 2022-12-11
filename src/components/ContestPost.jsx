import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from 'firebase/compat/app';
import Header from './Header';

const ContestPost = ({user}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");
    const [link, setLink] = useState("");
    async function handleSubmit(e) {
        e.preventDefault();
        const { uid, photoURL, displayName } = auth.currentUser;
        await db.collection("contest").add({
          title: title,
          description: description,
          img: img,
          link: link,
          photoURL,
          uid,
          displayName,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setTitle("");
        setDescription("");
        setImg("");
        setLink("")
        alert("Contest Posted")
      }
    return (
        <>
        <Header user={user}/>
        <div className="container" style={{"height": "60vh"}}>
            <h1 className="text-center my-4">Post Article About Contests</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" class="form-control my-3" placeholder="Enter The Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea type="text" class="form-control my-3" placeholder="Enter The Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <input type="text" class="form-control my-3" placeholder="Enter The Img Url" value={img} onChange={(e) => setImg(e.target.value)}/>
                <input type="text" class="form-control my-3" placeholder="Enter The Contest Link" value={link} onChange={(e) => setLink(e.target.value)}/>
                <button type="submit" className="btn btn-success">Post A Contest</button>
            </form>
        </div>
        </>
    );
}

export default ContestPost;
