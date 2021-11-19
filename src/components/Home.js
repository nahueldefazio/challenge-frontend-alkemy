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
        <div className={'container'}>
            <div className={'row row-cols-1 row-cols-md-4 justify-content-around'}>
                {isLoggedIn()}
                {lists.map((value, index) => {
                    return (

                        <div key={index} className="card col d-flex justify-content-between my-4 border border-dark"
                             style={{width: "18rem"}}>
                            <div>
                                <h1 className={'list-group-item m-0 mt-3'}>ID: {value.id}</h1>
                                <h1 className={'list-group-item m-0'}>userId: {value.userId}</h1>
                                <h2 className={'list-group-item m-0'}>Title: {value.title}</h2>
                            </div>
                            <div className={'d-flex align-items-center flex-column'}>
                                <Link to={`/posts/${value.id}`} className="btn btn-success my-3 w-75">Details</Link>
                                <Link to={`/delete/${value.id}`} className="btn btn-success my-3 w-75">Delete</Link>
                                <Link to={`/post/${value.id}`} className="btn btn-success my-3 w-75">Edit</Link>
                            </div>

                        </div>


                    )

                })}
            </div>
        </div>
    );
}

export default Home;
