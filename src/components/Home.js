import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import LoginContext from "../context/LoginContext";

function Home() {

    const [lists, setLists] = useState([]);
    const {isLoggedIn} = useContext(LoginContext)

    const url = `https://jsonplaceholder.typicode.com/posts`


    useEffect(() => {
        axios.get(url)
            .then(res => {
                setLists(res.data);
            })
    }, [url]);


    return (
        <div>
            {isLoggedIn()}
            {lists.map((value,index) =>{
            return(
                <div key={index}>
                    <h1>ID: {value.id}</h1>
                    <h1>userId: {value.userId}</h1>
                    <h2>Title: {value.title}</h2>
                    <Link to={`/posts/${value.id}`} className="btn btn-success m-3" >Details</Link>
                    <Link to={`/delete/${value.id}`} className="btn btn-success m-3" >Delete</Link>
                    <Link to={`/post/${value.id}`} className="btn btn-success m-3" >Edit</Link>
                </div>
            )
            } )}
        </div>
    );
}

export default Home;
