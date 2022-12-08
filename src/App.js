import  './App.css';
import React ,{useState} from "react";
import { Routes, Route} from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Post  from  './components/Post';
import Profile  from  './components/Profile'
import CHome from "./components/CHome";
import ChatRoom from "./components/ChatRoom";


function App () {
    const [posts, setPosts] = useState([
        {
            username: "Blessing",
            caption: "Wow, I'm Amazing!",
            imageUrl:
                "https://images.unsplash.com/photo-1556448990-e7385a499333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fG1lcmNlZGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            username: "Saira Amjad",
            caption: "Mercedes Benz!",
            imageUrl:
                "https://images.unsplash.com/photo-1556448990-e7385a499333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fG1lcmNlZGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60\"",
        },
    ]);

return(
    <>

    <Navbar />
    <Routes>

        <Route path='/profi' element={<Profile/>}/>

        <Route path='/' element={<Post/>}/>

        <Route exact path="/ch" element={<CHome/>} />
        <Route exact path="/:roomId" element={<ChatRoom/>} />
    </Routes>
        <div className="timeline">
            {posts.map((post) => (
                <Post
                    username={post.username}
                    caption={post.caption}
                    imageUrl={post.imageUrl}
                />
            ))}
        </div>

        </>
)

}
export default App;