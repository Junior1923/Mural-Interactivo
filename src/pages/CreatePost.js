import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { db, auth } from "../ConfiguracionFirebase";

function CreatePost({isAuth}) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postColletionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async() => {
    await addDoc(postColletionRef, {
      title,
      postText,
      author: {name: auth.currentUser.displayName, id: auth.currentUser.uid},
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });

  return (
    <div className='CreatePosts'>
      <div className='PostsContainer'>
      <h1>En que piensas hoy?</h1>
      <div className='MandarPosts'>
        <input placeholder='Escribe tu titulo...' onChange={(event) =>{
          setTitle(event.target.value);
        }}
        />
      </div>
      <div className='MandarPosts'>
        <textarea placeholder='Desarrolla tu Idea...' onChange={(event) => {
          setPostText(event.target.value);          
        }}
        />
      </div>
      <button onClick={createPost}>Subir post</button>
      </div>
    </div>
  );
} 
export default CreatePost
