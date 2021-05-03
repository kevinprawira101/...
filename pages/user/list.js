import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Button, Row, Col, Modal, Form } from 'react-bootstrap';
import Add from '@material-ui/icons/Add';

import * as Yup from 'yup';
import { Formik, Form as Forms } from 'formik';
import Axios from 'axios'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// function MyVerticallyCenteredModal(props, { data2 }) {
//     const url = '';
//     return (
//         <Modal
//             {...props}
//             size="md"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//         >
//             <Modal.Header closeButton>
//                 <Modal.Title id="contained-modal-title-vcenter">
//                     Edit User
//           </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <Formik
//                     initialValues={{
//                         first_name: '',
//                         last_name: '',
//                         email: '',
//                         password: '',
//                         role_id: '',
//                     }}

//                     // validationSchema={UserSchema}
//                     onSubmit={async (values) => {
//                         Axios.put(url, values).
//                             then(function (response) {
//                                 console.log(response)
//                             }).
//                             catch(function (error) {
//                                 console.log(error)
//                             })
//                     }}
//                 >
//                     {(props) => (
//                         <Forms noValidate>
//                             <Form>
//                                 <Row className="mb-2">
//                                     <Col sm="3">
//                                         <Form.Label>First Name</Form.Label>
//                                     </Col>
//                                     <Col sm="6">
//                                         <Form.Control
//                                             placeholder="First Name"
//                                             name="first_name"
//                                             onChange={props.handleChange}
//                                             onBLur={props.handleBlur} />

//                                     </Col>
//                                 </Row>

//                                 <Row className="mb-2">
//                                     <Col sm="3">
//                                         <Form.Label>Last Name</Form.Label>
//                                     </Col>
//                                     <Col sm="6">
//                                         <Form.Control
//                                             placeholder="Last Name"
//                                             name="last_name"
//                                             onChange={props.handleChange}
//                                             onBLur={props.handleBlur}
//                                         />

//                                     </Col>
//                                 </Row>

//                                 <Row className="mb-2">
//                                     <Col sm="3">
//                                         <Form.Label>Email</Form.Label>
//                                     </Col>
//                                     <Col sm="6">
//                                         <Form.Control
//                                             placeholder="Email"
//                                             name="email"
//                                             onChange={props.handleChange}
//                                             onBLur={props.handleBlur}
//                                         />

//                                     </Col>
//                                 </Row>

//                                 <Row className="mb-2">
//                                     <Col sm="3">
//                                         <Form.Label>Password</Form.Label>
//                                     </Col>
//                                     <Col sm="6">
//                                         <Form.Control
//                                             placeholder="Password"
//                                             name="password"
//                                             onChange={props.handleChange}
//                                             onBLur={props.handleBlur}
//                                         />

//                                     </Col>
//                                 </Row>

//                                 <Row className="mb-2">
//                                     <Col sm="3">
//                                         <Form.Label>Roles</Form.Label>
//                                     </Col>
//                                     <Col sm="6">
//                                         <Row>
//                                             <Col>
//                                                 <Form.Control
//                                                     as="select"
//                                                     defaultValue="Choose..."
//                                                     name="role_id"
//                                                     onChange={props.handleChange}
//                                                     onBLur={props.handleBlur} >
//                                                     {/* {data2.map((i, index) => (
//                                                         <option key={i.id} value={index}>{i.roleType}</option>
//                                                     ))} */}
//                                                     <option value="1">1</option>
//                                                     <option value="2">2</option>
//                                                 </Form.Control>
//                                             </Col>
//                                         </Row>
//                                     </Col>
//                                 </Row>

//                                 <Modal.Footer>
//                                     <Row>
//                                         <Button className="d-flex justify-content-end mr-2" variant="success" onClick={props.handleSubmit}>Update</Button>
//                                         <Button onClick={props.onHide}>Close</Button>
//                                     </Row>
//                                 </Modal.Footer>
//                             </Form>
//                         </Forms>
//                     )}
//                 </Formik>
//             </Modal.Body>
//         </Modal >
//     );
// }

export default function list({ data }) {

    // const [modalShow, setModalShow] = React.useState(false);

    const url = 'http://localhost:3000/api/user/delete'
    const handleDelete = (id) => {
        Axios.delete(url, {
            id: id
        }).then(function (response) {
            console.log(response);
            alert(id);
        }).
            catch(function (error) {
                console.log(error)
                alert(id);
            })
    };

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

                // validationSchema={UserSchema}
                onSubmit={async (values) => {
                    // console.log(values)
                    Axios.delete(url, values).
                        then(function (response) {
                            console.log(response)
                        }).
                        catch(function (error) {
                            console.log(error)
                        })
                }}
            >
                {(props) => (
                    <Forms noValidate>
                        <div variant="container">
                            <Row>
                                <Col>
                                    <h4>User List</h4>
                                </Col>

                                <Col className="d-flex justify-content-end">
                                    <Link href="buat-user">
                                        <Button variant="primary mr-2"><Add fontSize="small" /> Buat User Baru</Button>
                                    </Link>
                                </Col>
                            </Row>
                            <div class="mt-8">
                                <table class="min-w-full table-auto">
                                    <thead class="justify-between">

                                        <tr class="bg-dark">
                                            <th class="px-2 py-2">
                                                <span class="text-gray-300">First Name</span>
                                            </th>
                                            <th class="px-2 py-2">
                                                <span class="text-gray-300">Last Name</span>
                                            </th>
                                            <th class="px-2 py-2">
                                                <span class="text-gray-300">Email</span>
                                            </th>

                                            <th class="px-2 py-2">
                                                <span class="text-gray-300">Role</span>
                                            </th>

                                            <th class="px-2 py-2">
                                                <span class="text-gray-300">Actions</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        {data.map((user, index) => (
                                            <tr key={user.id}>
                                                <td class="px-2 py-2 whitespace-nowrap">
                                                    <div class="text-sm text-gray-900">{user.firstName}</div>
                                                </td>
                                                <td class="px-2 py-2 whitespace-nowrap">
                                                    <div class="text-sm text-gray-900">{user.lastName}</div>
                                                </td>
                                                <td class="px-2 py-2 whitespace-nowrap">
                                                    <div class="text-sm text-gray-900">{user.email}</div>
                                                </td>
                                                <td class="px-2 py-2 whitespace-nowrap">
                                                    <div class="text-sm text-gray-900">
                                                        {user.role.roleType}
                                                    </div>
                                                </td>

                                                <td class="px-2 py-2 whitespace-nowrap">
                                                    <div class="text-sm text-gray-900">
                                                        {/* <Button variant="warning mr-2" onClick={() => setModalShow(true)}>
                                                Edit
                                            </Button>
                                            <MyVerticallyCenteredModal
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            /> */}
                                                        <Link href={`${user.id}`}>
                                                            <Button variant="warning mr-2" >
                                                                Edit
                                                            </Button>
                                                        </Link>
                                                        {/* <Button variant="danger" onClick={() => handleDelete(i.role_id)}>Delete</Button> */}

                                                        <Button variant="danger" onClick={handleDelete}>Delete</Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Forms>
                )}
            </Formik>
        </Layout>
    )
}

export async function getServerSideProps() {
    const users = await prisma.user.findMany({
        orderBy: [
            {
                id: 'asc'
            }
        ],
        include: {
            role: true,
        }
    });

    return {
        props: {
            data: users,
            // data2: roles
        }

    }
}