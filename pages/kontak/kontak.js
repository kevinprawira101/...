import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import {
	Tabs,
	Tab,
	Card,
	Button,
	DropdownButton,
	Dropdown,
	InputGroup,
	FormControl,
	Form,
	Col,
	Row,
	FormCheck
} from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';
import { useRouter } from 'next/router'
import Axios from 'axios'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default function Kontak ({data}) {

	const router = useRouter();
    const url = 'http://localhost:3000/api/updatekontak';
    const updatekontak = (e) => {
        const data = {
            // roleType: 'test',
            // roleDesc: 'test22222'
        }
        Axios.put(url, data).
            then(function (response) { console.log(response) }).
            catch(function (error) { console.log(error) })

    

    };
    const url1 = 'http://localhost:3000/api/kontak/deletekontak';
    const deletekontak = (id)=>{
        Axios.delete(
            url1, {
                data:{
                   deleteid: id 
                }
            }).then(function(response){
                    console.log(response);
                    // router.push('informasi-kontak')
                }).catch(function (error) {
                console.log(error)
                alert(id);
            })
    };


	return (
		<Layout>
			<h2>Kontak</h2>
			<div className="d-flex justify-content-end">
				<Link href="/kontak/buat-kontak-baru">
					<Button variant="primary">
						<AddIcon fontSize="small" />Kontak Baru
					</Button>
				</Link>
			</div>
			<hr />
			<div variant="container">
				<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
					<Tab eventKey="pelanggan" title="Pelanggan" />
					<Tab eventKey="supplier" title="Supplier" />
					<Tab eventKey="karyawan" title="Karyawan" />
					<Tab eventKey="lainnya" title="Lainnya" />

					<div eventKey="pelanggan">
						<div class="mt-8">
							<Form.Group as={Row}>
								<SettingsIcon fontSize="Large" />
								<h3>Daftar Pelanggan</h3>
							</Form.Group>
							<div class="flex flex-row-reverse mb-2">
								<Form.Group as={Row}>
									<DropdownButton variant="primary ml-2" id="dropdown-basic-button" title="Tindakan">
										<Dropdown.Item>
											<a>Arsip</a>
										</Dropdown.Item>
										<Dropdown.Item>
											<a>Hapus</a>
										</Dropdown.Item>
									</DropdownButton>

									<DropdownButton variant="primary ml-2" id="dropdown-basic-button" title="Ekspor">
										<Dropdown.Item>
											<a>Excel</a>
										</Dropdown.Item>
										<Dropdown.Item>
											<a>Hapus</a>
										</Dropdown.Item>
									</DropdownButton>
									<Col sm="6">
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text id="basic-addon1">
													<SearchIcon />
												</InputGroup.Text>
											</InputGroup.Prepend>
											<FormControl
												placeholder="cari"
												aria-label="cari"
												aria-describedby="basic-addon1"
											/>
										</InputGroup>
									</Col>
								</Form.Group>
							</div>

							<Card>
								<Card.Body>
									<div class="mt-2">
										<table class="min-w-full table-auto">
											<thead class="justify-between">
												<tr class="bg-dark">
													<th class="px-2 py-2">
														<FormCheck />
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Nama</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Nama Perushaan</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Alamat</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Email</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">No Handphone</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Saldo</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Action</span>
													</th>

												</tr>
											</thead>
											<tbody class="bg-white divide-y divide-gray-200">

											{console.log(data)}
											{data.map(i => (
												<tr>
													<th class="px-2 py-2">
														<FormCheck />
													</th>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">{i.nama_panggilan}</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">{i.nama_perusahaan}</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">{i.alamat_pengiriman}</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">{i.email}</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">{i.no_hp}</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">Rp. 335,340,000</div>
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
								</Card.Body>
							</Card>
						</div>
					</div>

					<div eventKey="supplier">
						<div class="mt-8">
							<Form.Group as={Row}>
								<SettingsIcon fontSize="Large" />
								<h3>Daftar Pelanggan</h3>
							</Form.Group>
							<div class="flex flex-row-reverse mb-2">
								<Form.Group as={Row}>
									<DropdownButton variant="primary ml-2" id="dropdown-basic-button" title="Tindakan">
										<Dropdown.Item>
											<a>Arsip</a>
										</Dropdown.Item>
										<Dropdown.Item>
											<a>Hapus</a>
										</Dropdown.Item>
									</DropdownButton>

									<DropdownButton variant="primary ml-2" id="dropdown-basic-button" title="Ekspor">
										<Dropdown.Item>
											<a>Excel</a>
										</Dropdown.Item>
										<Dropdown.Item>
											<a>Hapus</a>
										</Dropdown.Item>
									</DropdownButton>
									<Col sm="6">
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text id="basic-addon1">
													<SearchIcon />
												</InputGroup.Text>
											</InputGroup.Prepend>
											<FormControl
												placeholder="cari"
												aria-label="cari"
												aria-describedby="basic-addon1"
											/>
										</InputGroup>
									</Col>
								</Form.Group>
							</div>

							<Card>
								<Card.Body>
									<div class="mt-2">
										<table class="min-w-full table-auto">
											<thead class="justify-between">
												<tr class="bg-dark">
													<th class="px-2 py-2">
														<FormCheck />
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Nama</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Nama Perushaan</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Alamat</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Email</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">No Handphone</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Saldo</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Action</span>
													</th>
												</tr>
											</thead>
											<tbody class="bg-white divide-y divide-gray-200">
											{console.log(data)}
											{data.map(i => (
												<tr>
													<th class="px-2 py-2">
														<FormCheck />
													</th>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">{i.nama_panggilan}</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">{i.nama_perusahaan}</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">{i.alamat_pengiriman}</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">{i.email}</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">{i.no_hp}</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">Rp. 335,340,000</div>
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
								</Card.Body>
							</Card>
						</div>
					</div>

					<div eventKey="karyawan">
						<div class="mt-8">
							<Form.Group as={Row}>
								<SettingsIcon fontSize="Large" />
								<h3>Daftar Pelanggan</h3>
							</Form.Group>
							<div class="flex flex-row-reverse mb-2">
								<Form.Group as={Row}>
									<DropdownButton variant="primary ml-2" id="dropdown-basic-button" title="Tindakan">
										<Dropdown.Item>
											<a>Arsip</a>
										</Dropdown.Item>
										<Dropdown.Item>
											<a>Hapus</a>
										</Dropdown.Item>
									</DropdownButton>

									<DropdownButton variant="primary ml-2" id="dropdown-basic-button" title="Ekspor">
										<Dropdown.Item>
											<a>Excel</a>
										</Dropdown.Item>
										<Dropdown.Item>
											<a>Hapus</a>
										</Dropdown.Item>
									</DropdownButton>
									<Col sm="6">
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text id="basic-addon1">
													<SearchIcon />
												</InputGroup.Text>
											</InputGroup.Prepend>
											<FormControl
												placeholder="cari"
												aria-label="cari"
												aria-describedby="basic-addon1"
											/>
										</InputGroup>
									</Col>
								</Form.Group>
							</div>

							<Card>
								<Card.Body>
									<div class="mt-2">
										<table class="min-w-full table-auto">
											<thead class="justify-between">
												<tr class="bg-dark">
													<th class="px-2 py-2">
														<FormCheck />
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Nama</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Nama Perushaan</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Alamat</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Email</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">No Handphone</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Saldo</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Action</span>
													</th>
												</tr>
											</thead>
											<tbody class="bg-white divide-y divide-gray-200">
											{console.log(data)}
											{data.map(i => (
												<tr>
													<th class="px-2 py-2">
														<FormCheck />
													</th>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">{i.nama_panggilan}</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">{i.nama_perusahaan}</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">{i.alamat_pengiriman}</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">{i.email}</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">{i.no_hp}</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">Rp. 335,340,000</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">
															<Button variant="warning mr-2">Edit</Button>
															<Button variant="danger" onClick={()=>deletekontak(i.id)}>Delete</Button>
														</div>
													</td>
												</tr>	
												))}											
											</tbody>
										</table>
									</div>
								</Card.Body>
							</Card>
						</div>
					</div>

					<div eventKey="lainnya">
						<div class="mt-8">
							<Form.Group as={Row}>
								<SettingsIcon fontSize="Large" />
								<h3>Daftar Pelanggan</h3>
							</Form.Group>
							<div class="flex flex-row-reverse mb-2">
								<Form.Group as={Row}>
									<DropdownButton variant="primary ml-2" id="dropdown-basic-button" title="Tindakan">
										<Dropdown.Item>
											<a>Arsip</a>
										</Dropdown.Item>
										<Dropdown.Item>
											<a>Hapus</a>
										</Dropdown.Item>
									</DropdownButton>

									<DropdownButton variant="primary ml-2" id="dropdown-basic-button" title="Ekspor">
										<Dropdown.Item>
											<a>Excel</a>
										</Dropdown.Item>
										<Dropdown.Item>
											<a>Hapus</a>
										</Dropdown.Item>
									</DropdownButton>
									<Col sm="6">
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text id="basic-addon1">
													<SearchIcon />
												</InputGroup.Text>
											</InputGroup.Prepend>
											<FormControl
												placeholder="cari"
												aria-label="cari"
												aria-describedby="basic-addon1"
											/>
										</InputGroup>
									</Col>
								</Form.Group>
							</div>

							<Card>
								<Card.Body>
									<div class="mt-2">
										<table class="min-w-full table-auto">
											<thead class="justify-between">
												<tr class="bg-dark">
													<th class="px-2 py-2">
														<FormCheck />
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Nama</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Nama Perushaan</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Alamat</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Email</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">No Handphone</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Saldo</span>
													</th>
													<th class="px-2 py-2">
														<span class="text-gray-300">Action</span>
													</th>
												</tr>
											</thead>
											<tbody class="bg-white divide-y divide-gray-200">
											{console.log(data)}
											{data.map(i => (
												<tr>
													<th class="px-2 py-2">
														<FormCheck />
													</th>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">{i.nama_panggilan}</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">{i.nama_perusahaan}</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">{i.alamat_pengiriman}</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">{i.email}</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">{i.no_hp}</div>
													</td>
													<td class="px-2 py-2 whitespace-nowrap">
														<div class="text-sm text-gray-900">Rp. 335,340,000</div>
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
								</Card.Body>
							</Card>
						</div>
					</div>
				</Tabs>

				<div class="float-right mt-8">
					<Button variant="danger mr-2">Kembali</Button>
					<Link href="/daftar-akun/tutup-buku-berhasil">
						<Button variant="success">Konfirmasi Tutup Buku</Button>
					</Link>
				</div>
			</div>
		</Layout>
	);
}

export async function getServerSideProps() {
	const kontaks = await prisma.kontak.findMany({
		orderBy: [
			{
				id: 'asc'
			}
		],
		include: {
			Kategori_id: true,
		}

	});

	return {
		props: {
			data: kontaks
		}

	}
}

