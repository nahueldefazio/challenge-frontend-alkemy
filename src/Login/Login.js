import React from 'react';
import axios from "axios";
import {Formik} from 'formik';
import * as Yup from "yup";
import swal from 'sweetalert';
import FormLogIn from "./FormLogin";

function Login() {
    const url = "http://challenge-react.alkemy.org/"

    async function logUser(values) {

        let payload = {email: values.email, password: values.password};
        await axios.post(url, payload).then(res => {
            let data = res.data;
            localStorage.setItem("token", data.token)
            console.log(data)
            swal({
                title: "Correcto",
                text: "Bienvenido al challenge de Alkemy ",
                icon: "success",
                buttons: {
                    continuar: true,
                },
            })
                .then((value) => {
                    switch (value) {
                        case "continuar":
                            window.location.replace("/")
                            break;
                        default:
                            window.location.replace("/")
                    }
                });

        }).catch(error => {
            console.log(error)
            swal({
                title: error,
                text: "Wrong password or email",
                icon: "error",
                button: "Ok",
            });
        });
    }

    const ErrorSchema = Yup.object().shape({
        email: Yup.string().required("Email es requerido"),
        password: Yup.string().required("Password es requerido")
    })

    return (
        <div className={'form-container w-50 mx-auto my-5'}>
            <h1 className={'neon'}>Log In</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={(values) => logUser(values)}
                validationSchema={ErrorSchema}
                component={FormLogIn}>
            </Formik>
        </div>

    );
}

export default Login;
