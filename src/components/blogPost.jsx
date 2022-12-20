import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from 'firebase/compat/app';
import Header from './Header';
import LoadingBar from 'react-top-loading-bar'

const BlogPost = ({user}) => {
    const [progress, setProgress] = useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");
    async function handleSubmit(e) {
        e.preventDefault();
        setProgress(30)
        const { uid, photoURL, displayName } = auth.currentUser;
        await db.collection("blogs").add({
          title: title,
          description: description,
          img: img,
          photoURL,
          uid,
          displayName,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          date: new Date,
        });
        setTitle("");
        setProgress(70)
        setDescription("");
        setImg("");
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
        <div className="container" style={{"height": "60vh"}}>
            <h1 className="text-center my-4">Post blog</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" class="form-control my-3" placeholder="Enter The Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea type="text" class="form-control my-3" placeholder="Enter The Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <input type="text" class="form-control my-3" placeholder="Enter The Img Url" value={img} onChange={(e) => setImg(e.target.value)}/>
                <button type="submit" className="btn btn-success">Post Blog</button>
            </form>
        </div>
        </>
    );
}

export default BlogPost;