import React from 'react'
import Layout from '../../components/Layout';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Formik, Form as Forms } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const UserSchema = Yup.object().shape({
    first_name: Yup.string().required('*required'),
    last_name: Yup.string().required('*required'),
    email: Yup.string().required('*required'),
    password: Yup.string().required('*required'),
});

export default function User({ data }) {

    return (
        <Layout>
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    roleId: ''
                }}

                validationSchema={UserSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {(props) => (
                    <Forms noValidate>
                        <div>
                            <h4>Buat User Baru</h4>
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
                                                    <Form.Control as="select" defaultValue="Choose..." name="roleSelect">
                                                        {data.map(i => (
                                                            <option value={i.roleId}>{i.roleType}</option>
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
                                            <Button variant="success" onClick={props.handleSubmit}>Simpan</Button>
                                        </Col>
                                    </Row>

                                </Form>
                            </div>
                        </div>
                    </Forms>
                )}

            </Formik>
        </Layout>
    )
}

export async function getServerSideProps() {
    // // Pass data to the page via props
    // return { props: { data } }

    const roles = await prisma.role.findMany({
        orderBy: [
            {
                id: 'asc'
            }
        ]
    });

    return {
        props: {
            data: roles
        }

    }
}