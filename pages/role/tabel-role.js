import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Button, Row, Col } from 'react-bootstrap';
import Add from '@material-ui/icons/Add';

import { Formik, Form as Forms } from 'formik';
import Axios from 'axios'
import { useRouter } from 'next/router'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default function roleList({ data }) {
    // Role API
    const deleteRole = 'http://localhost:3000/api/user/deleteRole';

    // Redirect Function
    const router = useRouter();

    // Delete Exisiting Role based on [id] 
    const handleDelete = async (id) => {
        Axios.delete(deleteRole, {
            data: {
                roleid: id
            }
        }).then(function (response) {
            console.log(response);
            router.push('tabel-role');
        }).
            catch(function (error) {
                console.log(error)
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
                                    <h4>Role List</h4>
                                </Col>

                                <Col className="d-flex justify-content-end">
                                    <Link href="add-role">
                                        <Button variant="primary mr-2"><Add fontSize="small" /> Buat Role Baru</Button>
                                    </Link>
                                </Col>
                            </Row>
                            <div className="mt-8">
                                <table className="min-w-full table-auto">
                                    <thead className="justify-between">

                                        <tr className="bg-dark">
                                            <th className="px-2 py-2">
                                                <span className="text-gray-300">Role ID</span>
                                            </th>
                                            <th className="px-2 py-2">
                                                <span className="text-gray-300">Role Type</span>
                                            </th>
                                            <th className="px-2 py-2">
                                                <span className="text-gray-300">Actions</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {data.map((role) => (
                                            <tr>
                                                <td className="px-2 py-2 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{role.id}</div>
                                                </td>
                                                <td className="px-2 py-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <div className="text-sm font-medium text-gray-900">{role.roleType}</div>
                                                            <div className="text-sm text-gray-500">{role.roleDesc}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-2 py-2 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        <Link key={role.id} href={`${role.id}`} >
                                                            <Button variant="warning mr-2">Edit</Button>
                                                        </Link>
                                                        <Button variant="danger" key={role.id} id="id" name="id" onClick={() => handleDelete(role.id)}>Delete</Button>
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
    // Get Roles from API
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