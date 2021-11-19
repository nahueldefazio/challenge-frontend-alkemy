import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Loading from "./shared/Loading";

function Details() {

    const [details, setDetails] = useState("");
    const [status, setStatus] = useState("");

    const {id} = useParams()

    const url = `https://jsonplaceholder.typicode.com/posts/${id}`

    useEffect(() => {
        axios.get(url).then(r => {
            setDetails(r.data)
            setStatus("Loading is successful")
        }).catch(error => {
            swal({
                title: error,
                text: "ID not found",
                icon: "error",
                button: "Ok",
            });
        });
    }, [id, url]);


    if (status === "") {
        return <Loading/>
    }else {
        return (
            <div className={'container'}>
                <h1  className={'fs-3'}><strong className={'fs-1'}>ID:</strong> {details.id}</h1>
                <h1 className={'fs-3'}><strong className={'fs-1'}>userId:</strong> {details.userId}</h1>
                <h1 className={'fs-3'}><strong className={'fs-1'}>Title:</strong> {details.title}</h1>
                <h1 className={'fs-3'}><strong className={'fs-1'}>Body:</strong> {details.body}</h1>
            </div>
        );

    }

}

export default Details;
