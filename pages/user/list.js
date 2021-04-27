import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Button, Row, Col } from 'react-bootstrap';
import Add from '@material-ui/icons/Add';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default function list({ data }) {
    return (
        <Layout>
            <div variant="container">
                <Row>
                    <Col>
                        <h4>User List</h4>
                    </Col>

                    <Col className="d-flex justify-content-end">
                        <Link href="buat-role">
                            <Button variant="primary mr-2"><Add fontSize="small" /> Buat Role Baru</Button>
                        </Link>

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
                            {data.map((i, index) => (
                                <tr>
                                    {/* <td class="px-2 py-2 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div>
                                                <div class="text-sm font-medium text-gray-900">{i.firstName}</div>
                                                <div class="text-sm text-gray-500">{i.lastName}</div>
                                            </div>
                                        </div>
                                    </td> */}
                                    <td class="px-2 py-2 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">{i.firstName}</div>
                                    </td>
                                    <td class="px-2 py-2 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">{i.lastName}</div>
                                    </td>
                                    <td class="px-2 py-2 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">{i.email}</div>
                                    </td>
                                    <td class="px-2 py-2 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">{i.roleId}</div>
                                    </td>

                                    <td class="px-2 py-2 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">
                                            <Button variant="warning mr-2">Edit</Button>
                                            <Button variant="danger">Delete</Button>
                                        </div>
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    // // Pass data to the page via props
    // return { props: { data } }

    const users = await prisma.user.findMany({
        orderBy: [
            {
                id: 'asc'
            }
        ]
    });

    return {
        props: {
            data: users
        }

    }
}