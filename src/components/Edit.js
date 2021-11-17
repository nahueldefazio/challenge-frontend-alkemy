import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {Field, Form, Formik} from "formik";

function Edit() {

    const url = `https://jsonplaceholder.typicode.com/posts`

    const {id} = useParams()
    const [status, setStatus] = useState("");
    const [editPost, setEditPost] = useState({
        title: "",
        body: "",
        userId: 1
    });

    function updatePost(values) {
        axios.put(url + "/" + id, {
            title: values.editPost.title,
            body: values.editPost.body
        })
            .then(function (response) {
                console.log(response.data);
                setEditPost({
                    title: response.data.title,
                    body: response.data.body,
                    userId: 1
                })

                setStatus("Creation is successful")
            })
    }

    useEffect(() => {
        axios.get(url + "/" + id).then(r => {
            setEditPost(r.data)
            console.log(editPost)
        })
    }, []);


    return (
        <div>
            <Formik initialValues={
                editPost
            } enableReinitialize={true}

                    onSubmit={(values => {
                        updatePost(values);

                    })}
            >
                {
                    (props) => {
                        console.log(props)
                        return (
                            <Form className={'m-auto w-50 center-form'}>
                                <div className={'d-flex flex-column m-3 align-items-center'}>
                                    <h3 className={'text-center mt-5 fs-1'}>Post information</h3>
                                    <label>Title: </label>
                                    <Field name={'editPost.title'} type={'text'} className={'w-100 form-control'} />
                                    <label>Body </label>
                                    <Field name={'editPost.body'} type={'text'} className={'w-100 form-control'}/>
                                    <button className={'btn btn-outline-success w-50 my-3'} type={'submit'}
                                    > Update
                                    </button>
                                </div>

                            </Form>
                        )
                    }
                }
            </Formik>
            <h1>{status}</h1>

        </div>
    );
}

export default Edit;
