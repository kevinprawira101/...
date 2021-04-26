import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Button, Row, Col } from 'react-bootstrap';
import Add from '@material-ui/icons/Add';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default function roleList({ data }) {
    return (
        <Layout>
            <div variant="container">
                <Row>
                    <Col>
                        <h4>Role List</h4>
                    </Col>
                </Row>
                <div class="mt-8">
                    <table class="min-w-full table-auto">
                        <thead class="justify-between">

                            <tr class="bg-dark">
                                <th class="px-2 py-2">
                                    <span class="text-gray-300">Role ID</span>
                                </th>
                                <th class="px-2 py-2">
                                    <span class="text-gray-300">Role Type</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            {data.map((i, index) => (
                                <tr>
                                    <td class="px-2 py-2 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">{i.id}</div>
                                    </td>
                                    <td class="px-2 py-2 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div>
                                                <div class="text-sm font-medium text-gray-900">{i.roleType}</div>
                                                <div class="text-sm text-gray-500">{i.roleDesc}</div>
                                            </div>
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