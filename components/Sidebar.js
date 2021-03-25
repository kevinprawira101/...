import React from 'react';
import Link from 'next/link';
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

const Sidebar = () => {
	return (
		<div>
			<div class="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
				<div class="flex items-center justify-center h-14 border-b">
					<div />
				</div>
				<div class="overflow-y-auto overflow-x-hidden flex-grow">
					<ul class="flex flex-col py-4 space-y-1">
						<li class="px-7">
							<div class="flex flex-row items-center h-8">
								<div class="text-lg font-light tracking-wide text-gray-500">Menu</div>
							</div>
						</li>

						<li>
							<Link href="/">
								<a class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
									<span class="inline-flex justify-center items-center ml-4">
										<HomeIcon />
									</span>
									<span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
								</a>
							</Link>
						</li>
						<li>
							<a class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
								<span class="inline-flex justify-center items-center ml-4">
									<MenuBookIcon />
								</span>
								<span class="ml-2 text-sm tracking-wide truncate">Jurnal</span>
							</a>
						</li>
						<li />

						<hr class="ml-4 mr-4" />

						<li>
							<Link href="/daftar-akun/daftar-akun">
								<a class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
									<span class="inline-flex justify-center items-center ml-4">
										<AccountBalanceIcon />
									</span>
									<span class="ml-2 text-sm tracking-wide truncate">Daftar Akun</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/kontak/kontak">
								<a class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
									<span class="inline-flex justify-center items-center ml-4">
										<ImportContactsIcon />
									</span>
									<span class="ml-2 text-sm tracking-wide truncate">Kontak</span>
								</a>
							</Link>
						</li>
						<li>
							<a class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
								<span class="inline-flex justify-center items-center ml-4">
									<AssessmentIcon />
								</span>
								<span class="ml-2 text-sm tracking-wide truncate">Laporan</span>
							</a>
						</li>
						<li>
							<a class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
								<span class="inline-flex justify-center items-center ml-4">
									<MonetizationOnIcon />
								</span>
								<span class="ml-2 text-sm tracking-wide truncate">Pajak</span>
							</a>
						</li>
						<li>
							<Link href="/produk/produk">
								<a class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
									<span class="inline-flex justify-center items-center ml-4">
										<LocalMallIcon />
									</span>
									<span class="ml-2 text-sm tracking-wide truncate">Produk</span>
								</a>
							</Link>
						</li>

						<hr class="ml-4 mr-4" />

						<li>
							<a class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
								<span class="inline-flex justify-center items-center ml-4">
									<AccountBalanceWalletIcon />
								</span>
								<span class="ml-2 text-sm tracking-wide truncate">Kas & Bank</span>
							</a>
						</li>
						<li>
							<a class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
								<span class="inline-flex justify-center items-center ml-4">
									<ShoppingBasketIcon />
								</span>
								<span class="ml-2 text-sm tracking-wide truncate">Penjualan</span>
							</a>
						</li>
						<li>
							<a class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
								<span class="inline-flex justify-center items-center ml-4">
									<ShoppingCartIcon />
								</span>
								<span class="ml-2 text-sm tracking-wide truncate">Pembelian</span>
							</a>
						</li>
						<li>
							<Link href="/biaya/pengeluaran">
								<a class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
									<span class="inline-flex justify-center items-center ml-4">
										<PaymentIcon />
									</span>
									<span class="ml-2 text-sm tracking-wide truncate">Biaya</span>
								</a>
							</Link>
						</li>

						<hr class="ml-4 mr-4" />

						<li>
							<a class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
								<span class="inline-flex justify-center items-center ml-4">
									<SettingsIcon />
								</span>
								<span class="ml-2 text-sm tracking-wide truncate">Peraturan</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
