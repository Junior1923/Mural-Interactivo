import React, { useEffect, useState } from "react";
import { getDocs, collection,deleteDoc,doc} from "firebase/firestore";
import { db,auth } from "../ConfiguracionFirebase";

function Home({ isAuth }) {
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      console.log(
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
    };
    getPosts();
      }, [postsCollectionRef]);

  return (
    <div className="Home">
      {postLists.map((post) => {
        return (
          <div className="PostHome">
            <div className="CabezaPost">
              <div className="Titulo">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                <button
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  {" "}
                  &#128163;
                </button>
              </div>
            </div>
            <div className="ContainerPost"> {post.postText}</div>
            <h3>@{post.author ? post.author.name : "Desconocido"}</h3>
          </div>
        );
      })}
    </div>
  );
}
export default Home;
