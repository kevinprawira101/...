import React from 'react'
import Link from 'next/link';
import Layout from '../../components/Layout';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { Button } from 'react-bootstrap';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default function tabelpajak({ data }) {
    return (
        <Layout>
            <div>
                <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
                    <div className="">
                        <div className="flex justify-between">
                            <h1 className="text-4xl mb-7 mr-2">
                                <CreditCardIcon fontSize="large" />
                            List Pajak
                        </h1>
                            <div className="inline-block mr-3 mt-2">
                                <Link href="/pajak/add-pajak">
                                    <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-blue-600 rounded-md bg-blue-500 hover:bg-blue-400">+ Create Pajak Baru</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Nama</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Persentase Aktif</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Akun Pajak Penjualan</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Akun Pajak Pembelian</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Action</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white">
                                {data.map((i) => (
                                    <tr>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                            <div className="flex items-center">
                                                <div>
                                                    <div className="text-sm leading-5 text-gray-800">{i.nama}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                            <div className="text-sm leading-5 text-blue-900">{i.presentasaAktif}%</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{i.akunPajakPenjualan}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{i.akunPajakPembelian}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                            <Link key={i.id} href={`${i.id}`}>
                                                <Button variant="warning mr-2">
                                                    Edit
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
                            <div>
                                <p className="text-sm leading-5 text-blue-700">
                                    <span className="font-medium"> Showing 1  </span>

                                    <span className="font-medium"> to 50  </span>

                                    <span className="font-medium">of   100  </span>
                                        results
                                </p>
                            </div>
                            <div className="mb-5 mt-3">
                                <nav className="relative z-0 inline-flex shadow-sm">
                                    <div>
                                        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous">
                                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                                            1
                                        </a>
                                        <a href="#" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                                            2
                                        </a>
                                        <a href="#" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                                            3
                                        </a>
                                    </div>
                                    <div v-if="pagination.current_page < pagination.last_page">
                                        <a href="#" className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next">
                                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    // Get Pajak's from API
    const pajaks = await prisma.pajak.findMany({
        orderBy: {
            id: "asc",
        }
    })

    return {
        props: {
            data: pajaks
        }
    }
}
