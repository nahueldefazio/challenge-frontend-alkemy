import React, {useContext, useState} from 'react';
import axios from "axios";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import LoginContext from "../context/LoginContext";

function Creation() {

    const {isLoggedIn} = useContext(LoginContext)
    const [status, setStatus] = useState("");
    const [newPost, setNewPost] = useState({
        title: "",
        body: "",
        userId: 1
    });
    const url = `https://jsonplaceholder.typicode.com/posts`

    function createPost(values) {
        console.log(values)
        axios.post(url, {
            title: values.newPost.title,
            body: values.newPost.body,
            userId: 1
        })
            .then(function (response) {
                console.log(response);
                setNewPost({
                    title: response.data.title,
                    body: response.data.body,
                    userId: 1
                })
                setStatus("Creation is successful")
            })
    }


    const ErrorSchema = Yup.object().shape({
        newPost:Yup.object().shape({
            title: Yup.string().required("Title is required.").min(3, "Title is too short").max(20, "Title is too long"),
            body: Yup.string().required("Body is required.").min(5, "Body is too short").max(150, "Body is too long")
        })

    })


    return (
        <div>
            {isLoggedIn()}
            <Formik initialValues={{
                newPost:{
                    title: "",
                    body: ""
                }

            }} onSubmit={(values => {
                createPost(values);

            })} validationSchema={ErrorSchema}
            >
                {
                    (props) => {
                        return (
                            <Form className={'m-auto w-50 center-form'}>
                                <div className={'d-flex flex-column m-3 align-items-center'}>
                                    <h3 className={'text-center mt-5 fs-1'}>Post information</h3>
                                    <label>Title: </label>
                                    <Field name={'newPost.title'} type={'text'} className={'w-100 form-control'}/>
                                    <small className={'error'}>{props.errors.newPost?.title}</small>
                                    <label>Body: </label>
                                    <Field name={'newPost.body'} as={'textarea'} type={'text'} className={'w-100 form-control'}/>
                                    <small className={'error'}>{props.errors.newPost?.body}</small>
                                    <button className={'btn btn-outline-success w-50 my-3'} type={'submit'}
                                            disabled={!props.isValid}> Send
                                    </button>
                                </div>

                            </Form>
                        )
                    }
                }
            </Formik>
            <div className={'container'}>
                <h1 className={'text-center mb-5'}>{status}</h1>
                {newPost.title && <h3><strong>Title:</strong> {newPost?.title} </h3>}
                {newPost.body && <h3><strong>Body:</strong> {newPost?.body}</h3>}
            </div>


        </div>
    );
}

export default Creation;
