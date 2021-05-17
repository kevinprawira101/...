import React, { useEffect } from 'react'
import Layout from '../../components/Layout';
import { Form, Row, Col, Button } from 'react-bootstrap';

import * as Yup from 'yup';
import { Formik, Form as Forms } from 'formik';
import Axios from 'axios'
import { useRouter } from 'next/router'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default function update({ data }) {
    // user API
    const url = 'http://localhost:3000/api/user/updateUser';

    // Take route [id]
    const router = useRouter();
    const { id } = router.query

    // useEffect(() => {

    // }, [])

    // const handleUpdate = async () => {
    //     Axios.put(url, {
    //         data: {
    //             id: id
    //         }
    //     }).then(function (response) {
    //         console.log(response);
    //         router.push('list');
    //     }).
    //         catch(function (error) {
    //             console.log(error)
    //             alert('update failed' + id);
    //         })
    // };

    return (
        <Layout>
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    role_id: '',
                }}

                onSubmit={async (values) => {
                    console.log(id);
                    console.log(values);

                    Axios.put(url, values).
                        then(function (response) {
                            console.log(response)
                        }).
                        catch(function (error) {
                            console.log(error)
                        })
                }}
            // onSubmit={handleUpdate}
            >
                {(props) => (
                    <Forms noValidate>
                        <div>
                            <h4>Update User with {id}</h4>
                            <div class="mt-12 container">
                                <Form>
                                    <Row className="mb-2">
                                        <Col sm="2">
                                            <Form.Label>First Name</Form.Label>
                                        </Col>
                                        <Col sm="4">
                                            <Form.Control placeholder="First Name" name="first_name" onChange={props.handleChange} onBLur={props.handleBlur} />
                                            {props.errors.first_name && props.touched.first_name ? <div class="text-red-500 text-sm">{props.errors.first_name}</div> : null}
                                        </Col>
                                    </Row>

                                    <Row className="mb-2">
                                        <Col sm="2">
                                            <Form.Label>Last Name</Form.Label>
                                        </Col>
                                        <Col sm="4">
                                            <Form.Control placeholder="Last Name" name="last_name" onChange={props.handleChange} onBLur={props.handleBlur} />
                                            {props.errors.last_name && props.touched.last_name ? <div class="text-red-500 text-sm">{props.errors.last_name}</div> : null}
                                        </Col>
                                    </Row>

                                    <Row className="mb-2">
                                        <Col sm="2">
                                            <Form.Label>Email</Form.Label>
                                        </Col>
                                        <Col sm="4">
                                            <Form.Control placeholder="Email" name="email" onChange={props.handleChange} onBLur={props.handleBlur} />
                                            {props.errors.email && props.touched.email ? <div class="text-red-500 text-sm">{props.errors.email}</div> : null}
                                        </Col>
                                    </Row>

                                    <Row className="mb-2">
                                        <Col sm="2">
                                            <Form.Label>Password</Form.Label>
                                        </Col>
                                        <Col sm="4">
                                            <Form.Control placeholder="Password" name="password" onChange={props.handleChange} onBLur={props.handleBlur} />
                                            {props.errors.password && props.touched.password ? <div class="text-red-500 text-sm">{props.errors.password}</div> : null}
                                        </Col>
                                    </Row>

                                    <Row className="mb-2">
                                        <Col sm="2">
                                            <Form.Label>Roles</Form.Label>
                                        </Col>
                                        <Col sm="4">
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" name="role_id" onChange={props.handleChange} onBLur={props.handleBlur} >
                                                        {/* loop over list of roles */}
                                                        {data.map((role) => (
                                                            <option key={role.id} value={role.id}>{role.roleType}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm="2" />
                                        <Col sm="4" className="d-flex justify-content-end mt-10">
                                            <Button variant="danger mr-2">Batal</Button>
                                            {/* <Button variant="success" onClick={() => handleUpdate(user.id)}>Simpan</Button> */}
                                            <Button variant="success" onClick={props.handleSubmit}>Simpan</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </Forms>
                )}
            </Formik>
        </Layout >
    )
}

export async function getServerSideProps() {
    // get roles from our api

    const roles = await prisma.role.findMany({
        orderBy: {
            id: 'asc'
        }
    })

    return {
        props: {
            data: roles
        }

    }
}
