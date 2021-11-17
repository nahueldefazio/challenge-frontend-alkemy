import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";


function Edit_2() {

    const url = `https://jsonplaceholder.typicode.com/posts`

    const {id} = useParams()
    const [status, setStatus] = useState("");
    const [editPost, setEditPost] = useState({
        title: "",
        body: "",
        userId: 1
    });

    function updatePost() {
        axios.put(url + "/" + id, {
            title: editPost.title,
            body: editPost.body
        })
            .then(function (response) {
                console.log(response.data)
                setEditPost({
                    title: response.data.title,
                    body: response.data.body,
                })
                setStatus("Creation is successful")
            })
    }

    useEffect(() => {
        axios.get(url + "/" + id).then(r => {
            setEditPost(r.data)
        })
    }, []);

    function handleOnChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setEditPost(values => ({...values, [name]: value}))
    }
    
    return (
        <div>
            <form onSubmit={(event =>{
                event.preventDefault();
                updatePost()
            } )}>
                <input name={'body'} value={editPost.body} onChange={(e)=>handleOnChange(e)}/>
                <input name={'title'} value={editPost.title}  onChange={(e)=>handleOnChange(e)}/>
                <input name={'userId'} value={editPost.userId}  onChange={(e)=>handleOnChange(e)}/>
                <button type={"submit"}>Update</button>
            </form>

        </div>
    );
}

export default Edit_2;
