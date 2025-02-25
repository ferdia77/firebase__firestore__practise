import React from 'react';
import './App.css';
import { auth, db } from './firebase/init';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
 } from "firebase/auth"; 

function App() {
  const[user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  function createPost() {
    const post = {
      title: "Land a 300k job",
      description: "Finish Frontend Simplified",
    };
    addDoc(collection(db, "posts"), post)
  }

  async function getAllPosts() {
    const data = await getDocs(collection(db, "posts"));
    console.log(data);
  }


  React.useEffect((user) => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user);
      if(user) {
        setUser(user)
      }
    })
     
  }, []);

  function register() {
    console.log('register');
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
      .then((user) => {
        console.log(user)
      })
      .catch((error) => {
        console.log(error);
    })
  }

function login() {
  signInWithEmailAndPassword(auth, "email@email.com", "test123")
  .then(({user}) => {
    console.log(user)
    setUser(user);
  })
  .catch((error) => {
    //setErrorMessage('Password Invalid')
    console.log(error);
  })
}

function logout() {
  signOut(auth);
  setUser({});
}

  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      {loading ? 'loading...' : user.email}
      <button onClick={createPost}>Create Post</button>
      <button onClick={getAllPosts}>Get All Posts</button>
    </div>
  );
}

export default App;
