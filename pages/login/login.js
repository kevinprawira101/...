import React from 'react'
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik, Form as Forms } from 'formik';
import { useRouter } from 'next/router'
import Axios from 'axios'

const LoginSchema = Yup.object().shape({
    loginEmail: Yup.string().required(' required'),
    loginPassword: Yup.string().required(' required'),
});

export default function login() {
    const url = 'http://localhost:3000/api/user/login';
    const router = useRouter()

    return (
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
                            alert("credentials benar")
                            router.push('dashboard')

                        } else {
                            alert("credentials salah")
                            router.push('/')
                        }
                    }).
                    catch(function (error) { console.log(error) })
            }}
        >
            {(props) => (
                <Forms noValidate className="d-flex justify-content-center">
                    {/* <div>
                        <h1 class="mb-4">
                            Login
                         </h1>
                        <Form>
                            <Row className="mb-2">
                                <Col sm="4" >
                                    <Form.Label>Email</Form.Label>
                                </Col>
                                <Col sm="10" >
                                    <Form.Control placeholder="Input Your Email" type="text" name="loginEmail" onChange={props.handleChange} onBLur={props.handleBlur} />
                                    {props.errors.loginEmail && props.touched.loginEmail ? <div class="text-red-500 text-sm">{props.errors.loginEmail}</div> : null}
                                </Col>
                            </Row>

                            <Row className="mb-2">
                                <Col sm="4">
                                    <Form.Label>Password</Form.Label>
                                </Col>
                                <Col sm="10">
                                    <Form.Control placeholder="Input password" type="password" name="loginPassword" onChange={props.handleChange} onBLur={props.handleBlur} />
                                    {props.errors.loginPassword && props.touched.loginPassword ? <div class="text-red-500 text-sm">{props.errors.loginPassword}</div> : null}
                                </Col>
                            </Row>

                            <Row className="mb-2">
                                <Col sm="2" />
                                <Col sm="4" className="d-flex justify-content-center">
                                    <Button variant="primary" onClick={props.handleSubmit}>Login</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div> */}
                    <Form>
                        <div class="max-w-lg max-w-xs bg-gray-600 shadow-2xl rounded-lg mx-auto text-center py-12 mt-48 rounded-xl">
                            <h1 class="text-gray-200 text-center font-extrabold -mt-3 text-3xl ml-2 mr-2">PT. Hexoan Business Mitrasindo</h1>
                            <div class="container py-5 max-w-md mx-auto">
                                <form method="" action="">
                                    <div class="mb-4">
                                        <input
                                            placeholder="Input Email"
                                            name="loginEmail"
                                            onChange={props.handleChange}
                                            onBLur={props.handleBlur}
                                            class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text" />
                                        {props.errors.loginPassword && props.touched.loginPassword ? <div class="text-red-500 text-sm">{props.errors.loginPassword}</div> : null}
                                    </div>
                                    <div class="mb-6">

                                        <input
                                            placeholder="Input password"
                                            name="loginPassword"
                                            onChange={props.handleChange}
                                            onBLur={props.handleBlur}
                                            class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                            type="password" />
                                        {props.errors.loginPassword && props.touched.loginPassword ? <div class="text-red-500 text-sm">{props.errors.loginPassword}</div> : null}
                                    </div>
                                    <div class="flex items-center justify-end">
                                        <button
                                            onClick={props.handleSubmit}
                                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="button">
                                            Login
                                    </button>
                                        {/* <a class="inline-block align-baseline font-bold text-sm text-gray-400 " href="#">
                                        Forgot Password?
                                    </a> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Form>
                </Forms>
            )}
        </Formik>
    )
}
