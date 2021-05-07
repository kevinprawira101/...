import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Button, Row, Col } from 'react-bootstrap';
import Add from '@material-ui/icons/Add';
import { useRouter } from 'next/router'

import { Formik, Form as Forms } from 'formik';
import Axios from 'axios'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default function list({ data }) {
    const url = 'http://localhost:3000/api/user/delete'
    const router = useRouter();

    const handleClick = async (id) => {
        console.log(id)
    }

    const handleDelete = async (id) => {
        Axios.delete(url, {
            data: {
                userid: id
            }
        }).then(function (response) {
            console.log(response);
            router.push('list');
        }).
            catch(function (error) {
                console.log(error)
                alert("Failed to delete user with id " + id);
            })
    };

    return (
        <Layout>
            <Formik>
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
                                                        <Link key={user.id} id="updateUser" name="updateUser" href={`${user.id}`} onClick={() => handleClick(user.id)}>
                                                            <Button variant="warning mr-2" >
                                                                Edit
                                                            </Button>
                                                        </Link>
                                                        <Button variant="danger" key={user.id} id="id" name="id" onClick={() => handleDelete(user.id)}>Delete</Button>
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
        }
    }
}