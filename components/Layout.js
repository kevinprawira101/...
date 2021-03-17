import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Login from '../pages/auth/login'
import Register from '../pages/auth/register'
import Sidebar from './Sidebar'
import CreateUser from '../pages/createform/createuser'
import TabelPajak from '../pages/pajak/tabelpajak'
import AddPajak from '../pages/pajak/addpajak'

export default function Layout({ }) {
    return (

        <div className="bg-white-300">
            <Navbar>
            </Navbar>
            <Head>

                <Sidebar>

                </Sidebar>
            </Head>

            <div className="container mx-64">
                <TabelPajak>

                </TabelPajak>
            </div>
        </div>
    )
}
