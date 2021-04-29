import React from 'react'
import Layout from '../../components/Layout';
import { Form, Row, Col, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik, Form as Forms } from 'formik';
import Axios from 'axios'

const LoginSchema = Yup.object().shape({
    loginEmail: Yup.string().required(' required'),
    loginPassword: Yup.string().required(' required'),
});

export default function login() {
    const url = 'http://localhost:3000/api/user/login';
    return (
        <Layout>
            <Formik
                initialValues={{
                    loginEmail: '',
                    loginPassword: '',
                }}

                validationSchema={LoginSchema}
                onSubmit={async (values) => {
                    Axios.post(url, values).
                        then(function (response) {
                            if (response.data.data !== null) {
                                alert("login benar")
                                redirect('../daftar-akun/daftar-akun');

                            } else {
                                alert("login salah")
                            }
                        }).
                        catch(function (error) { console.log(error) })
                }}
            >
                {(props) => (
                    <Forms noValidate>
                        <div>
                            <h1 class="mb-4">
                                Login
                         </h1>
                            <Form>
                                <Row className="mb-2">
                                    <Col sm="2">
                                        <Form.Label>Email</Form.Label>
                                    </Col>
                                    <Col sm="4">
                                        <Form.Control placeholder="Input Your Email" type="text" name="loginEmail" onChange={props.handleChange} onBLur={props.handleBlur} />
                                        {props.errors.loginEmail && props.touched.loginEmail ? <div class="text-red-500 text-sm">{props.errors.loginEmail}</div> : null}
                                    </Col>
                                </Row>

                                <Row className="mb-2">
                                    <Col sm="2">
                                        <Form.Label>Password</Form.Label>
                                    </Col>
                                    <Col sm="4">
                                        <Form.Control placeholder="Input password" type="password" name="loginPassword" onChange={props.handleChange} onBLur={props.handleBlur} />
                                        {props.errors.loginPassword && props.touched.loginPassword ? <div class="text-red-500 text-sm">{props.errors.loginPassword}</div> : null}
                                    </Col>
                                </Row>

                                <Row className="mb-2">
                                    <Col sm="2" />
                                    <Col sm="4" className="d-flex justify-content-end">
                                        <Button variant="primary" onClick={props.handleSubmit}>Login</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Forms>
                )}
            </Formik>
        </Layout>
    )
}
