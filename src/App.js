import React, {useEffect, useState} from "react";
import './App.css'
import Comments from "./components/Comments";
import {Context} from "./context";
import {commentsData} from "./mockData/commentsData";

function App() {
    const [user] = useState({userID: 10, username: 'Имяпользователя И.И.'})
    const [comments, setComments] = useState([])
    useEffect(() => setComments(commentsData), [])
    return (
        <Context.Provider value={
            {user, comments, setComments}
        }>
            <div className="App">
                <h1>Дерево комментариев</h1>
                <Comments/>
            </div>
        </Context.Provider>

    );
}

export default App;
