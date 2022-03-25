import React, {useContext, useState} from 'react';
import {Context} from "../context";

const TextArea = () => {

    const {selectedComment,setSelectedComment} = useContext(Context)

    const [text,setText] = useState('')

    const cancelButtonHandler=()=>{
        setSelectedComment({id: null, mode: null, action:()=>{}})
    }

    const addButtonHandler=()=>{
        if(text){
            console.log(selectedComment)
            selectedComment.action(text,selectedComment.id)
            cancelButtonHandler()
        }
    }

    return (
        <div>
            <textarea
                placeholder={'Write something...'}
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
            <button onClick={cancelButtonHandler}>cancel</button>
            <button onClick={addButtonHandler}>confirm</button>
        </div>
    );
};

export default TextArea;