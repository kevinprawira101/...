import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Button, DropdownButton, Dropdown, Row, Col } from 'react-bootstrap';
import Add from '@material-ui/icons/Add';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default function DaftarAkun({ data }) {

	return (
		<Layout>
			<div variant="container">
				<Row>
					<Col>
						<h4>Daftar Akun</h4>
					</Col>
					<Col className="d-flex justify-content-end">
						<DropdownButton variant="primary mr-2" id="dropdown-basic-button" title="Tindakan">
							<Dropdown.Item>
								<Link href="/daftar-akun/atur-saldo-awal">
									<a>Atur Saldo Awal</a>
								</Link>
							</Dropdown.Item>
							<Dropdown.Item>
								<Link href="/daftar-akun/tutup-buku">Penutupan Buku</Link>
							</Dropdown.Item>
						</DropdownButton>
						<Link href="/daftar-akun/buat-akun-baru">
							<Button>
								<Add fontSize="small" />Buat akun baru
							</Button>
						</Link>
					</Col>
				</Row>
				<div class="mt-8">
					<table class="min-w-full table-auto">
						<thead class="justify-between">

							<tr class="bg-dark">
								<th class="px-2 py-2">
									<span class="text-gray-300">Kode Akun</span>
								</th>
								<th class="px-2 py-2">
									<span class="text-gray-300">Nama Akun</span>
								</th>
								<th class="px-2 py-2">
									<span class="text-gray-300">Kategori Akun</span>
								</th>

								<th class="px-2 py-2">
									<span class="text-gray-300">Saldo (dalam IDR)</span>
								</th>
							</tr>
						</thead>
						{/* <tbody class="bg-white divide-y divide-gray-200">
							{data.map((i, index) => (
								<tr>
									<td class="px-2 py-2 whitespace-nowrap">
										<div class="flex items-center">
											<div>
												<div class="text-sm font-medium text-gray-900">{i.kode}</div>
												<div class="text-sm text-gray-500">{i.kodeAkun}</div>
											</div>
										</div>
									</td>
									<td class="px-2 py-2 whitespace-nowrap">
										<div class="text-sm text-gray-900">{i.namaAkun}</div>
									</td>
									<td class="px-2 py-2 whitespace-nowrap">
										<div class="text-sm text-gray-900">{i.kategoriAkun}</div>
									</td>
									<td class="px-2 py-2 whitespace-nowrap font-medium">
										<div class="text-sm text-gray-900">Rp. {i.saldo}</div>
									</td>
								</tr>

							))}
						</tbody> */}
						<tbody class="bg-white divide-y divide-gray-200">
							<tr>
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="flex items-center">
										<div>
											<div class="text-sm font-medium text-gray-900" />
											<div class="text-sm text-gray-500" />
										</div>
									</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="text-xl text-red-600 font-medium">Kas</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="text-sm text-gray-900" />
								</td>
								<td class="px-2 py-2 whitespace-nowrap font-medium">
									<div class="text-sm text-gray-900" />
								</td>
							</tr>

							{data.map(i => (
								<tr>
									<td class="px-2 py-2 whitespace-nowrap">
										<div class="flex items-center">
											<div>
												<div class="text-sm font-medium text-gray-900">{i.kode_akun}</div>
												{/* <div class="text-sm text-gray-500">test</div> */}
											</div>
										</div>
									</td>
									<td class="px-2 py-2 whitespace-nowrap">
										<div class="text-sm text-gray-900">{i.nama_akun}</div>
									</td>
									<td class="px-2 py-2 whitespace-nowrap">
										<div class="text-sm text-gray-900">{i.kategori_akun}</div>
									</td>
									<td class="px-2 py-2 whitespace-nowrap font-medium">
										<div class="text-sm text-gray-900">Rp. </div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</Layout>
	);
}

export async function getServerSideProps() {
	// // Pass data to the page via props
	// return { props: { data } }

	const akuns = await prisma.akun.findMany({
		orderBy: [
			{
				kode_akun: 'asc'
			}
		]
	});

	return {
		props: {
			data: akuns
		}

	}
}
