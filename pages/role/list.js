import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Button, Row, Col } from 'react-bootstrap';
import Add from '@material-ui/icons/Add';
import {useRouter} from 'next/router'
import Axios from 'axios'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default function roleList({ data }) {
    const router = useRouter();
    const url = 'http://localhost:3000/api/user/role/1';
    const updateData = (e) => {
        const data = {
            roleType: 'test',
            roleDesc: 'test22222'
        }
        Axios.put(url, data).
            then(function (response) { console.log(response) }).
            catch(function (error) { console.log(error) })

    

    };
    const url1 = 'http://localhost:3000/api/user/deleterole';
    const deletedata = (id)=>{
        Axios.delete(
            url1, {
                data:{
                   deleteid: id 
                }
            }).then(function(response){
                    console.log(response);
                    router.push('list')
                }).catch(function (error) {
                console.log(error)
                alert(id);
            })
    };

    return (
        <Layout>
            <div variant="container">
                <Row>
                    <Col>
                        <h4>Role List</h4>
                    </Col>

                    <Col className="d-flex justify-content-end">
                        <Link href="buat-role">
                            <Button variant="primary mr-2"><Add fontSize="small" /> Buat Role Baru</Button>
                        </Link>
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
                                <th class="px-2 py-2">
                                    <span class="text-gray-300">Actions</span>
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
                                    <td class="px-2 py-2 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">
                                            <Button variant="warning mr-2" onClick={updateData}>Edit</Button>
                                            <Button variant="danger" onClick={()=>deletedata(i.id)}>Delete</Button>
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
    try {
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

    } catch (err) {
        console.error(err)
    }
}