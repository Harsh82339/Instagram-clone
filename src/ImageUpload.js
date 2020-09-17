import React, { useState } from 'react';
import { Button } from "@material-ui/core";
import { storage, db } from "./fireBase"
import firebase from "firebase";
import './ImagesUpload.css';

     

function ImageUpload({username}) {
    // const [image, setImage] = useState(null);
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState('');
    const [progress, setProgress] = useState(0);
    
    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0]);

        }
    };  

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
               const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
             },
             (error) =>{
                 console.log(error);
                 alert(error.message);
                },
             () => {
                 storage
                 .ref("images")
                 .child(image.name)
                 .getDownloadURL()
                 .then(url => {
                   db.collection("posts").add({
                       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                       caption: caption,
                       imageURL: url,
                       userName: username
                   })  
                 })

                }
        )

    }
   return (
        < div className="imagesupload">
            <progress className="progress" value={progress} max="100" />
            <input type="text" placeholder="Caption" onChange={event => setCaption(event.target.value)} value={caption}/>
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>
            Upload
            </Button>
        </div>
    )
}

export default ImageUpload
