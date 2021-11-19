import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import Loading from "./shared/Loading";

function Edit() {

    const url = `https://jsonplaceholder.typicode.com/posts`

    const {id} = useParams()
    const [status, setStatus] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");


    function updatePost(values) {
        axios.put(url + "/" + id, {
            title: values.title,
            body: values.body
        })
            .then(function (response) {
                setTitle(response.data.title)
                setBody(response.data.body)


            })
    }

    useEffect(() => {
        axios.get(url + "/" + id).then(r => {
            setTitle(r.data.title)
            setBody(r.data.body)
            setStatus(true)

        })
    }, [body, id, title, url]);


    if (status) {
        return (
            <div>
                <Formik initialValues={{body, title}}
                        enableReinitialize={true}
                        onSubmit={(values => {
                            updatePost(values);

                        })}
                >
                    {
                        (props) => {
                            return (
                                <Form className={'m-auto w-50 center-form'}>
                                    <div className={'d-flex flex-column m-3 align-items-center'}>
                                        <h3 className={'text-center mt-5 fs-1'}>Edit information</h3>
                                        <label>Title: </label>
                                        <Field name={'title'} type={'text'} className={'w-100 form-control'}/>
                                        <label>Body: </label>
                                        <Field name={'body'} as={'textarea'} type={'text'}
                                               className={'w-100 form-control'}/>
                                        <button className={'btn btn-outline-success w-50 my-3'} type={'submit'}
                                        > Update
                                        </button>
                                    </div>

                                </Form>
                            )
                        }
                    }
                </Formik>
                <div className={'container'}>
                    <h3><strong>Title:</strong> {title}</h3>
                    <h3><strong>Body:</strong> {body}</h3>
                </div>

            </div>
        );

    } else {
        return <Loading/>

    }

}

export default Edit;
