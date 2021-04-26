import React from 'react'
import Layout from '../../components/Layout';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Formik, Form as Forms } from 'formik';
import * as Yup from 'yup';

const UserSchema = Yup.object().shape({
    role_name: Yup.string().required('*required'),
    role_desc: Yup.string().required('*required'),
});

export default function User({ data }) {

    return (
        <Layout>
            <Formik
                initialValues={{
                    role_name: '',
                    role_desc: '',
                }}

                validationSchema={UserSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {(props) => (
                    <Forms noValidate>
                        <div>
                            <h4>Buat Kontak Baru</h4>
                            <div class="mt-12 container">
                                <Form>
                                    <Row className="mb-2">
                                        <Col sm="2">
                                            <Form.Label>Role Name</Form.Label>
                                        </Col>
                                        <Col sm="4">
                                            <Form.Control placeholder="Role Name" name="role_name" onChange={props.handleChange} onBLur={props.handleBlur} />
                                            {props.errors.role_name && props.touched.role_name ? <div class="text-red-500 text-sm">{props.errors.role_name}</div> : null}
                                        </Col>
                                    </Row>

                                    <Row className="mb-2">
                                        <Col sm="2">
                                            <Form.Label>Role Description</Form.Label>
                                        </Col>
                                        <Col sm="4">
                                            <Form.Control placeholder="Role Desc" name="role_desc" onChange={props.handleChange} onBLur={props.handleBlur} />
                                            {props.errors.role_desc && props.touched.role_desc ? <div class="text-red-500 text-sm">{props.errors.role_desc}</div> : null}
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
