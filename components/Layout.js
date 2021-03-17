import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import CreateUser from '../pages/createform/createuser';
import TabelPajak from '../pages/pajak/tabelpajak';
import AddPajak from '../pages/pajak/addpajak';
import DaftarAkun from '../pages/daftarakun/daftarakun';

export default function Layout ({}) {
	return (
		<div className="bg-white-300">
			<Navbar />
			<Head>
				<Sidebar />
			</Head>

			<div className="container mx-64">
				<DaftarAkun />
			</div>
		</div>
	);
}
