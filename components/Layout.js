import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PaymentIcon from '@material-ui/icons/Payment';
import SettingsIcon from '@material-ui/icons/Settings';


export default function Layout ({ children }) {
	return (
		<div className="bg-white-300">
			<Navbar />
			<Head>
			 <Sidebar />
			</Head>

			<main className="ml-64 p-8">{children}</main>
		</div>
	);
}
