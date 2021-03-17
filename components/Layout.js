import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import CreateUser from '../pages/createform/createuser';
import TabelPajak from '../pages/pajak/tabelpajak';
import AddPajak from '../pages/pajak/addpajak';
import DaftarAkun from '../pages/daftarakun/daftarakun';

export default function Layout ({ children }) {
	return (
		<div className="bg-white-300">
			<Navbar />
			<Head>
				<Sidebar />
			</Head>

			<main className="container mx-64">{children}</main>
		</div>
	);
}
