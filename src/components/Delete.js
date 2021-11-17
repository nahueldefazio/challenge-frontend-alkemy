import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import LoginContext from "../context/LoginContext";
import swal from "sweetalert";
import {useParams} from "react-router-dom";

function Delete(props) {

    const {isLoggedIn} = useContext(LoginContext)
    const [status, setStatus] = useState("");
    const {id} = useParams()
    useEffect(() => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                setStatus('Delete successful')
            })
            .catch(error => {
                console.log(error)
                swal({
                    title: error,
                    text: "ID not found",
                    icon: "error",
                    button: "Ok",
                });
            });

    }, [id]);

    if (status === "") {
        return (
            <>
                {isLoggedIn()}
                <h1>... Loading</h1>
            </>

        )

    } else {
        return (
            <>
                {isLoggedIn()}
                <h1>{status}</h1>
            </>

        );
    }

}

export default Delete;
