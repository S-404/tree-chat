import React from "react";
import './App.css'
import Comments from "./components/Comments";

function App() {
    return (
            <div className="App">
                <h1>Дерево комментариев</h1>
                <Comments/>
            </div>
    );
}

export default App;
