import React from 'react';
import {Field, Form} from "formik";

function FormLogIn({errors}) {
    return (
        <div>
            <Form className={'d-flex flex-column'}>
                <label htmlFor="email" className={'neon fs-3'}>Email</label>
                <div className="input-group input-group-lg">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <Field
                        id="email"
                        name="email"
                        placeholder="exmaple@acme.com"
                        type="email"
                        className="form-control" aria-label="Username"
                        aria-describedby="basic-addon1"
                    />

                </div>
                <small className={'m-1 error'}>{errors.email}</small>
                <label htmlFor="password" className={'neon fs-3'}>Password</label>
                <div className="input-group input-group-lg">
                    <span className="input-group-text material-icons" id="basic-addon1">key</span>
                    <Field id="password" name="password" type="password" className="form-control"
                           aria-label="Username"/>

                </div>
                <small className={'m-1 error'}>{errors.password}</small>
                <button type="submit" className={'m-3 btn btn-warning w-50 mx-auto'}>Entrar</button>
            </Form>
        </div>
    );
}

export default FormLogIn;
